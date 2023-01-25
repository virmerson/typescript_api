import express from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Jwt } from "../../common/types/jwt";
import usersService from "../../users/services/users.service";

// @ts-expect-error
const jwtSecret: string = process.env.JWT_SECRET;

class JwtMiddleware {

  verifyRefreshBodyField( req: express.Request, res: express.Response, next: express.NextFunction) {
    if(req.body && req.body.refreshToken){
        next()
    }else{
        return res.status(400).send({ errors: ['Missing required field: refreshToken'] })
    }

  }

  async validRefreshNeeded(req: express.Request, res: express.Response, next: express.NextFunction) {

        //find user by email
    const user: any = await usersService.getUserByEmailWithPassword(
        res.locals.jwt.email
    );
    //create a salt 
    const salt = crypto.createSecretKey(
        Buffer.from(res.locals.jwt.refreshKey.data)
    );

    //create a hash
    const hash = crypto
        .createHmac('sha512', salt)
        .update(res.locals.jwt.userId + jwtSecret)
        .digest('base64');
        //if hash from client is equals to the hash that was just created by using user data 
        if (hash === req.body.refreshToken) {

            //add user data in the request body
            req.body = {
                userId: user._id,
                email: user.email,
                permissionFlags: user.permissionFlags,
            };
            return next();
        } else {
            return res.status(400).send({ errors: ['Invalid refresh token'] });
        }

  }

  validJWTNeeded(req: express.Request,res: express.Response, next: express.NextFunction) {

    if (req.headers['authorization']){
        try{
            const authorization = req.headers['authorization'].split(' ');
            if (authorization[0]!=='Bearer'){
                return res.status(401).send();
            }else {
                //valid

                res.locals.jwt = jwt.verify(authorization[1], jwtSecret) as Jwt
                next()
            }

        }catch (e){
            return res.status(403).send();
        }

    }else {
        return res.status(401).send();
    }
  }
}

export default new JwtMiddleware();

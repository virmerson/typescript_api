import {CommonRoutesConfig} from '../common/common.routes.config'
import usersController from './controllers/users.controller'
import usersMiddleware from './middleware/users.middleware'
import express from 'express'
import { body } from 'express-validator'
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware'
import jwtMiddleware from '../auth/middleware/jwt.middleware';
import permissionMiddleware from '../common/middleware/common.permission.middleware';
import { PermissionFlag } from '../common/middleware/common.permissionflag.enum';

export class UsersRoutes extends CommonRoutesConfig{
 

 constructor(app:express.Application){
        super (app, "UsersRoute")
    }

    configureRoutes(): express.Application {

        this.app.route('/users')
    
        .get( 
            jwtMiddleware.validJWTNeeded, 
            permissionMiddleware.permissionFlagRequired(PermissionFlag.ADMIN_PERMISSION), 
            usersController.listUsers )
        .post(  
            body('email').isEmail(),
            body('password')
            .isLength({min:5})
            .withMessage('Field must to have at least 5 characters '),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            usersMiddleware.validateSameEmailDoesntExist,  
            usersController.createUser)

        this.app.param(`userId`, usersMiddleware.extractUserId)
        
        this.app.route('/users/:userId')
         .all( 
            usersMiddleware.validateUserExists, 
            jwtMiddleware.validJWTNeeded, 
            permissionMiddleware.onlySameUserOrAdminCanDoThisAction)
        .get( usersController.getUserById)
        .delete(usersController.removeUser )


       
        this.app.put (`/users/:userId`, 
            [ 
            body('email').isEmail(),
            body('password')
            .isLength({min:5})
            .withMessage('Field must to have at least 5 characters '),
            body('firstName').isString(),
            body('lastName').isString(),
            body('permissionFlag').isInt(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            usersMiddleware.validateSameEmailBelongToSameUser, 
            usersController.put])

        

        this.app.patch('/users/:userId', [
                body('email').isEmail().optional(),
                body('password')
                .isLength({min:5})
                .withMessage('Field must to have at least 5 characters ')
                .optional(),
                body('firstName').isString().optional(),
                body('lastName').isString().optional(),
                body('permissionFlag').isInt().optional(),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                usersMiddleware.validatePatchEmail, 
                usersController.patch])
        
       
        return this.app
    }
}
import {CommonRoutesConfig} from './common.routes.config'

import express from 'express'

export class UsersRoutes extends CommonRoutesConfig{
 

 constructor(app:express.Application){
        super (app, "UsersRoute")
    }

    configureRoutes(): express.Application {

        this.app.route('/users')
        .get(  (req:express.Request , res:express.Response)=> {
            res.status(200).send('List of users')
        } )
        .post(  (req:express.Request , res:express.Response)=> {
            res.status(200).send('Post to users')
        })


        this.app.route('user/:userId')
        .all( (req:express.Request , res:express.Response,  next:express.NextFunction )=> {
            next()
        })
        .get( (req:express.Request , res:express.Response)=> {
            res.status(200).send(`GET requested for ${req.params.userId}`)
        })
        .put( (req:express.Request , res:express.Response)=> {
            res.status(200).send(`PUT requested for ${req.params.userId}`)
        })
        .patch( (req:express.Request , res:express.Response)=> {
            res.status(200).send(`Patch requested for ${req.params.userId}`)
        })
        .delete( (req:express.Request , res:express.Response)=> {
            res.status(200).send(`DELETE requested for ${req.params.userId}`)
        })

        return this.app
    }
}
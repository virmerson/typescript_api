import dotenv from 'dotenv'
const dotenvResult = dotenv.config()
if (dotenvResult.error){
    throw dotenvResult.error
}

import express from 'express'
import * as http from 'http'
import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import cors from 'cors'
import {CommonRoutesConfig} from './common/common.routes.config'
import {UsersRoutes} from './users/users.routes.config'
import { AuthRoutes } from './auth/auth.routes.config'
import debug from 'debug'


const app:express.Application= express();
const server:http.Server= http.createServer(app);
const port:number=3000 ;
const routes:Array<CommonRoutesConfig>=[];
const debugLog:debug.IDebugger= debug('log');


app.use(express.json())
app.use(cors())


const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};


if (!process.env.DEBUG){
    loggerOptions.meta=false

    if (typeof global.it === 'function') {
                loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
    }
}

app.use(expressWinston.logger(loggerOptions))

routes.push(new UsersRoutes(app))
routes.push (new AuthRoutes(app))

const runningMessage = `It's running on the port ${port}`

app.get("/", (req:express.Request, res:express.Response)=>{
    res.status(200).send(runningMessage)
})

export default  server.listen(port, ()=>{
    routes.forEach( (route:CommonRoutesConfig)=>{ 
        debugLog(`Routes configured for ${route.getName()}`)
     });

     console.log(runningMessage)
})

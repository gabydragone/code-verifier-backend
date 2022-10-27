/* 
* Root Router
* Redurections to Routers
**/

import express, {Response, Request} from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '@/utils/logger';

//Server instance
let server = express();

// Router instance
let rootRouter = express.Router();


// Activate for requests to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => { 
    // Send Hello World
    res.send('Welcome to API Rest APP Express + TS + Nodemon + Swagger + Mongoose ')
});




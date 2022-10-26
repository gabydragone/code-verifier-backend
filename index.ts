import express, { Express, Request, Response } from "express"; 
import dotenv from 'dotenv';


// Configurar the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port =process.env.PORT || 8000;

// Define the first Route of APP
app.get('/', (req: Request, res: Response) => { 
    // Send Hello World
    res.send('Welcome to API Rest APP Express + TS + Nodemon + Swagger + Mongoose ')
});

// Define the first Route of APP
app.get('/hello', (req: Request, res: Response) => { 
    // Send Hello World
    res.send('Welcome to GET Route: Hello! ')
});




// Execute APP and Listen Requests to PORT

app.listen(port, ()=> {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
    })

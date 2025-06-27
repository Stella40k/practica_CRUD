import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.port;

app.listen() =>{
    console.log(`Se esta escuchando en el puerto${port}`)
}
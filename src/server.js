import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import viewEngine from './config/viewEngine';
import { initWebRoutes } from './route';
import connectDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();

let app = express();

//config app
app.use(
    cors({
        origin: process.env.URL_REACT,
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend NodeJS is running on port " + port);
});
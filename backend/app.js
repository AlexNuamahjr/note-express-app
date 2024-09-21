import express from "express";
import dotEnv from "dotenv";
dotEnv.config();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import expressSession from "express-session";

const app = express()
    .use(cors({
        origin: "http://localhost:5173",
        credentials: true
    }))
    .use(morgan("dev"))
    .use(helmet())
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(expressSession({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {secure: process.env.NODE_ENV}
    }))

    export default app;
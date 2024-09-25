import express from "express";
import dotEnv from "dotenv";
dotEnv.config();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
    .use(cors({
        origin: "http://localhost:5173",
        credentials: true
    }))
    .use(morgan("dev"))
    .use(helmet())
    .use(express.json())
    .use(cookieParser())
    .use(express.urlencoded({extended: false}))

    export default app;
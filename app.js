import express from "express";
import helmet from "helmet";
import expressSession from "express-session";
import userRoutes from "./routes/index.js";
import authRoutes from "./routes/authRoutes.js";

const app = express()
    .use(helmet())
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(expressSession({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false}
    }))
    .use("/", userRoutes)
    .use("/auth", authRoutes)

    export default app;
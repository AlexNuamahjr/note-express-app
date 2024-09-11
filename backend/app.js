import express from "express";
import helmet from "helmet";
import expressSession from "express-session";
import userRoutes from "../backend/routes/index.js";
import authRoutes from "../backend/routes/authRoutes.js";
import noteRoutes from "../backend/routes/noteRoute.js";
import profileRoutes from "../backend/routes/profileRoutes.js";

const app = express()
    .use(helmet())
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(expressSession({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {secure: false}
    }))
    .use("/", userRoutes)
    .use("/auth", authRoutes)
    .use("/notes", noteRoutes)
    .use("/profile", profileRoutes)

    export default app;
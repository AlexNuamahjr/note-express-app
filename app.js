const express = require("express");
const helmet = require("helmet");
const expressSession = require("express-session");
const userRoutes = require("./routes/index.js");
const authRoutes = require("./routes/authRoutes.js");

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
    .use("/auth", authRoutes);

    module.exports = app;
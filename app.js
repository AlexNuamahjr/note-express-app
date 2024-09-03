const express = require("express");
const helmet = require("helmet");
const userRoutes = require("./routes/index.js");

const app = express()
    .use(helmet())
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use("/", userRoutes)


    module.exports = app;
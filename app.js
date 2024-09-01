const express = require("express");
const helmet = require("helmet");
const userRoutes = require("./routes/index.js");

const app = express()
    .use(helmet())
    .use("/", userRoutes)
    .use(express.json())
    .use(express.urlencoded({extended: false}))


    module.exports = app;
const express = require("express");
const helmet = require("helmet");

const app = express()
    .use(helmet)


    module.exports = app;
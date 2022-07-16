'use strict';

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

// exports 처리
module.exports = app;
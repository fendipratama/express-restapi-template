"use strict";

const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(cors());

require("dotenv").config();
const env = process.env.NODE_ENV;
const config = require("./config/config")[env];
const indexRouter = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");

app.get("/", (req, res) => {
  return res.json("Template expressjs rest-api version 1.01");
});

app.use("/api", indexRouter);

// catch 404
app.use((req, res, next) => {
  next(createError.NotFound());
});
app.use(errorHandler);

app.listen(config.server.port, () => {
  console.log("app running on port : " + config.server.port);
});

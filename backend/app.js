"use strict";

/** Express app for daily drawing poses */

const express = require("express");
const poses = require("./routes/poses");
const { NotFoundError, BadRequestError } = require("./expressError");

const app = express();
app.use("/pose", poses);


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError();
});


module.exports = app;
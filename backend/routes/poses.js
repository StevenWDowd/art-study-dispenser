"use strict";
/** routes for poses from API. May expand to include more specific queries. */

const express = require("express");
const { NotFoundError, BadRequestError } = require("./expressError");

const router = express.Router();

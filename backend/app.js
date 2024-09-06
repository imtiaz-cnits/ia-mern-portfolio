const express = require("express");
const app = new express();
const router = require("./src/routes/api");

const dotenv = require("dotenv");
const hpp = require("hpp");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");

dotenv.config();

// App Security
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Database Connection
const URI = process.env.DATABASE_URI_STRING;
const OPTION = { autoIndex: true };
mongoose
  .connect(URI, OPTION)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Router
app.set("etag", false);
app.use("/api/v1", router);

// Add React FrontEnd Routing
app.get("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;

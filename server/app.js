require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const formRouter = require("./routes/form");
const { redirectHTTPS } = require("./middlewares/httpsRedirect");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Success: connected to MongoDb!");
});
mongoose.connection.on("error", err => {
  console.log("Error connecting to MongoDb: " + err);
  process.exit(1);
});

const app = express();

app.use(cors()); // Use this after the variable declaration
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);
app.use("/form_api", formRouter);

// Render web page
app.use(express.static(path.join(__dirname, "../client")));
// Redirect everything to use https except for local dev
app.use(redirectHTTPS);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = app;

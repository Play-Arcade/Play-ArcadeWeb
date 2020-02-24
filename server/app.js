const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const graphql = require("express-graphql");
const { buildSchema } = require("graphql");

const indexRouter = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(cors()); // Use this after the variable declaration
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

//defining schema and root for graphql
var schema = buildSchema(
  `type Query {
    hello: String
  }`
);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use("/graphql", graphql({
  schema: schema,
  rootValue: root,
  graphiql: true // lets a dev enter 'localhost:3000/graphql' to test queries
}));

// Render web page
app.use(express.static(path.join(__dirname, "../")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = app;

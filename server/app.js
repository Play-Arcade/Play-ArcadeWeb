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
  `
  type Person {
    # fields relating to all parties
    id: Int
    name: String
    email: String

    # fields relating to those who indicate
    # they are a professional or student
    isProfessional: Boolean
    isStudent: Boolean
    occupation: String
    yearsExperience: Int
    stackItems: [String]
    whyGames: String
    buildDesires: [String]
    hasDoneGameJam: Boolean
    dedicationLevel: String
  }

  type Query {
    getPerson(id: Int!): Person
  }

  type Mutation {
    addPerson(name: String!, email: String!, isProfessional: Boolean!, isStudent: Boolean!,
      occupation: String, yearsExperience: Int, stackItems: [String], whyGames: String, 
      buildDesires: [String], hasDoneGameJam: Boolean, dedicationLevel: String): Person
    updateName(id: Int!, name: String!): Person
    updateEmail(id: Int!, email: String!): Person
  }
  `
);

// used in place of a real database
var fakeDatabase = {};

// tells the queries how to manipulate data before query return
var root = {
  addPerson: ({name, email, isProfessional, isStudent, occupation, yearsExperience,
    stackItems, whyGames, buildDesires, hasDoneGameJam, dedicationLevel}) => {

    // THIS WILL EVENTUALLY HAVE TO BE UPDATED TO A MORE SECURE
    // RANDOM INT METHOD THAT CHECKS FOR DUPLICATES BY QUERYING
    // AN ACUTAL DATABASE
    var id = Math.floor(Math.random() * 10000);

    // check if professional or student
    if(isProfessional || isStudent) {
      fakeDatabase[id] = {id, name, email, isProfessional, isStudent, occupation,
      yearsExperience, stackItems, whyGames, buildDesires, hasDoneGameJam, dedicationLevel};
    } else {
      fakeDatabase[id] = {id, name, email, isProfessional, isStudent};
    } // if the user is a professional or student, add extra fields, else don't

    return fakeDatabase[id];
  },
  updateName: ({id, name}) => {
    if(!fakeDatabase[id])
      console.log("id does not exist.");
    else 
    fakeDatabase[id].name = name;

    return fakeDatabase[id];
  },
  updateEmail: ({id, email}) => {
    if(fakeDatabase[id])
      fakeDatabase[id].email = email;
    else 
      console.log("id does not exist.");

      return fakeDatabase[id];
  },
  getPerson: ({id}) => {
    return fakeDatabase[id];
  }
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

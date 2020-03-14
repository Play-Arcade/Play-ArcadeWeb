/*
 *   Mongoose Generic Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//function that checks the type of the connection
const typeCheck = type => {
  return this.Connection_Type === type;
};
//create schema
const GenericFormSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },

  //Id to keep track of a perosn across data forms
  Id: { type: String, required: true },

  //true for professional, false for student
  Professional_student: { type: Boolean, required: true, default: false },
  Related_Org: { type: String, required: true },
  Connection_Type: {
    type: String,
    enum: ["Developer", "Investor", "Partner", "Player"],
    required: true,
  },
  Newsletter: { type: Boolean, required: false, default: true },

  //-------------if Investor---------------------------
  Investor_Type: {
    type: String,
    enum: ["Grant", "VC", "Angel", "Crowdfunding"],
    required: typeCheck("Investor"),
  },
  //only for investor type Grant or VC
  Institution_Name: {
    type: String,
    required: function() {
      if (this.Investor_Type == null) {
        console.log(
          "Doc Error! Investor_Type Not Set When Setting Institution Name for Investor!",
        );
        return false;
      } else {
        return this.Investor_Type === "Grant" || this.Investor_Type === "VC";
      }
    },
    default: "",
  },
  Deck_Req: { type: Boolean, required: typeCheck("Investor") },
  //----------------------------------------------------

  //-------------if Player------------------------------
  Account_Name: { type: String, required: typeCheck("Player") },

  //array of strings added when selector is checked
  Fav_Game_Type: { type: [{ type: String }], required: typeCheck("Player") },
  Devices: { type: [{ type: String }], required: typeCheck("Player") },
  Reasons_for_play: { type: [{ type: String }], required: false },
  //----------------------------------------------------

  //-------------if Partner-----------------------------
  Partner_Type: {
    type: String,
    enum: ["Advisor", "Advertiser", "Promoter", "Game Studio", "Non-Profit"],
    required: typeCheck("Partner"),
  },
  Intended_Partnership: { type: String, required: typeCheck("Partner") },
  //----------------------------------------------------

  //-------------if Developer---------------------------
  Project_Repo_Link: { type: String, required: typeCheck("Developer") },
  Experience: {
    type: String,
    enum: ["None", "<1 year", "Junior Dev", "Senior Dev", "Expert"],
    required: typeCheck("Developer"),
  },
  Developer_Type: {
    type: String,
    enum: ["Front-End", "Networks", "Database", "Full-Stack", "Server"],
    required: typeCheck("Developer"),
  },

  Stack: { type: [{ type: String }], required: typeCheck("Developer") },
  Why_Build: { type: String, required: typeCheck("Developer") },
  Want_Build_Type: {
    type: [{ type: String }],
    required: typeCheck("Developer"),
  },
  Been_To_Game_Jam: { type: Boolean, required: true, default: false },
  Game_Jam_details: {
    type: String,
    required: function() {
      if (this.Been_To_Game_Jam == null) {
        console.log(
          "Doc Error! Been_To_Game_Jam Not Set When Setting Game Jam Details!",
        );
        return false;
      } else {
        return this.Been_To_Game_Jam === true;
      }
    },
  },
  Reason_no_game_jam: {
    type: String,
    required: function() {
      if (this.Been_To_Game_Jam == null) {
        console.log(
          "Doc Error! Been_To_Game_Jam Not Set When Setting No Game Jam Reason!",
        );
        return false;
      } else {
        return this.Been_To_Game_Jam === false;
      }
    },
  },
  Classification: {
    type: [{ type: String }],
    required: typeCheck("Developer"),
  },
  //----------------------------------------------------
});

//create and export model
module.exports = GenericForm = mongoose.model(
  "generic_form",
  GenericFormSchema,
);

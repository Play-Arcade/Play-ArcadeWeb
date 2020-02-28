/*
 *   Mongoose Player Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const PlayerFormSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },

  //true for professional, false for student
  Professional_student: { type: Boolean, required: true, default: false },
  Related_Org: { type: String, required: true },

  Account_Name: { type: String, required: true },

  //array of strings added when selector is checked
  Fav_Game_Type: { type: Array, required: true },
  Devices: { type: Array, required: true },
  Reasons_for_play: { type: Array },
});

//create and export model
module.exports = PlayerForm = mongoose.model("player_form", PlayerFormSchema);

/*
 * Mongoose Developer Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const DeveloperFormSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },

  Professional: { type: Boolean, required: true, default: false },
  Student: { type: Boolean, required: true, default: false },
  Related_Org: { type: String, required: true },

  Experience: { type: Number, required: true },

  Stack: { type: Array, required: false },
  Why_Build: { type: String, required: true },
  Want_Build: { type: Array, required: true },
  Game_Jam: { type: Boolean, required: true, default: false },
  Game_Jam_details: { type: String, required: false },
  Reason_no_game_jam: { type: String, required: false },
  Classification: { type: Array, required: true },
});

//create and export model
module.exports = DeveloperForm = mongoose.model(
  "developer_form",
  DeveloperFormSchema,
);

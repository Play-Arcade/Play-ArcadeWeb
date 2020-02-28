/*
 * Mongoose Developer Form Model & Schema
 *
 */

//imports
const MONGOOSE = require("mongoose");
const SCHEMA = mongoose.Schema;

//create schema
const DEVELOPER_FORM = new Schema({
  Name: { type: String, required: True },
  Email: { type: String, required: True },

  Professional: { type: Boolean, required: false, default: false },
  Student: { type: Boolean, required: false, default: false },
  Related_Org: { type: String, required: false },

  Experience: { type: Number, required: true },

  Stack: { type: Array, required: false },
  Why_Build: { type: String, required: true },
  Want_Build: { type: Array, required: true },
  Game_Jam: { type: Boolean, required: true, default: false },
  Classification: { type: Array, required: true },
});

//create model
const GENERIC_MODEL = Mongoose.model("Generic Form", GENERIC_FORM);

//export model
module.exports = GENERIC_MODEL;

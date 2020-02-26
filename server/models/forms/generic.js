/*
 *   Mongoose Generic Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const GenericFormSchema = new Schema({
  Name: { type: String, required: True },
  Email: { type: String, required: True },

  //true for professional, false for student
  Professional_student: { type: Boolean, required: true, default: false },
  Related_Org: { type: String, required: true },
  Is_Developer: { type: Boolean, required: true, default: false },
  Is_Investor: { type: Boolean, required: true, default: false },
  Is_Partner: { type: Boolean, required: true, default: false },
  Is_Player: { type: Boolean, required: true, default: false },
  Newsletter: { type: Boolean, required: false, default: true },
});

//create and export model
module.exports = GenericForm = mongoose.model(
  "generic_form",
  GenericFormSchema,
);

/*
 *   Mongoose Investor Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const InvestorFormSchema = new Schema({
  Name: { type: String, required: True },
  Email: { type: String, required: True },

  //true for professional, false for student
  Professional_student: { type: Boolean, required: true, default: false },
  Related_Org: { type: String, required: true },

  Investor_Type: { type: String, required: true },
  Institution_Name: { type: String, required: false, default: "" },

  Call_Date: { type: String },
  Call_Time: { type: String },
  Deck_Req: { type: Boolean, required: true },
});

//create and export model
module.exports = InvestorForm = mongoose.model(
  "investor_form",
  InvestorFormSchema,
);

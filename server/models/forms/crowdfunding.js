/*
 *   Mongoose Crowdfunding Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const CrowdfundingFormSchema = new Schema({
  //not specified in document but I kept these anyways
  Name: { type: String, required: true },
  Email: { type: String, required: true },

  //true for professional, false for student
  Professional_student: { type: Boolean, required: true, default: false },
  Related_Org: { type: String, required: true },

  //not exactly sure what the 'Patreon' and 'Campaign' should be data wise
});

//create and export model
module.exports = CrowdfundingForm = mongoose.model(
  "crowdfunding_form",
  CrowdfundingFormSchema,
);

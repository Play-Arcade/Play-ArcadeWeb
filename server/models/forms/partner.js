/*
 *   Mongoose Partner Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const PartnerFormSchema = new Schema({
  //not specified in document but I kept these anyways
  Name: { type: String, required: true },
  Email: { type: String, required: true },

  Partner_Type: { type: String, required: true },

  Intended_Partnership: { type: String, required: true },

  InPerson: { type: Boolean, required: true, default: false },
  OnCall: { type: Boolean, required: true, default: false },

  Date: { type: String },
  Time: { type: String },
});

//create and export model
module.exports = PartnerForm = mongoose.model(
  "partner_form",
  PartnerFormSchema,
);

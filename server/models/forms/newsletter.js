/*
 *   Mongoose Newsletter Form Model & Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const NewsletterFormSchema = new Schema({
  //not specified in document but I kept these anyways
  Name: { type: String, required: true },
  Email: { type: String, required: true },

  //true for professional, false for student
  Professional_student: { type: Boolean, required: true, default: false },
  Related_Org: { type: String, required: true },
});

//create and export model
module.exports = NewsletterForm = mongoose.model(
  "newsletter_form",
  NewsletterFormSchema,
);

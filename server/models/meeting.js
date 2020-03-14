/*
 *   Mongoose Meeting Schema
 *
 */

//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const MeetingSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },

  //Id to keep track of a person across data forms, use ID from generic form
  Id: { type: String, required: true },
  Meeting_Type: { type: String, enum: ["Call", "In-Person"], required: true },
  Meeting_Date: { type: Date, required: true },
  Meeting_Location: {
    type: String,
    required: function() {
      if (this.Meeting_Type == null) {
        console.log(
          "Doc Error! Meeting_Type Not Set When Setting Meeting Location!",
        );
        return false;
      } else {
        return this.Meeting_Type === "In-Person";
      }
    },
  },
});

//create and export model
module.exports = Meeting = mongoose.model("meeting", MeetingSchema);

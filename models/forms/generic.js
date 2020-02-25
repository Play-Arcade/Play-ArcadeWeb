/*
*   Mongoose Generic Form Model & Schema
*
*/

//imports
const MONGOOSE = require('mongoose');
const SCHEMA = mongoose.Schema;


//create schema
const GENERIC_FORM = new Schema({
    Name: {type: String, required: True},
    Email: {type: String, required: True},

    //wasn't exactly sure on how to handle these fields yet
    Professional: {type: Boolean, required: false, default: false},
    Student: {type: Boolean, required: false, default: false},
    Related_Org: {type: String, required: false},
    Is_Dev : {type: Boolean, required: false, default: false},
    Is_Inv: {type: Boolean, required: false, default: false},
    Potential_Partner: {type: Boolean, required: false, default: false}

});


//create model
const GENERIC_MODEL = Mongoose.model("Generic Form", GENERIC_FORM);

//export model
module.exports = GENERIC_MODEL;

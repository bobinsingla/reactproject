"use strict";

var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
   		name        : String,
   		status		: String,
   		description : String,
   		createdOn   : Date
	});

module.exports = mongoose.model("customer", customerSchema);
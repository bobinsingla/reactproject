"use strict";

var mongoose = require('mongoose');

module.exports = function(app){
	
	var init = function(){
		mongoose.connect('mongodb://localhost/customers');
	};
	
	return {
		init: init
	};
};
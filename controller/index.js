"use strict";

module.exports = function(app){

	var customer = require('./customer')(app);
	
	var init = function(){

	};

	return {	
		init: init, 
		customer: customer,
	};
};
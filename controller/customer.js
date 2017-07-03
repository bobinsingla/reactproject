"use strict";

var customer = require('../model/customer');

module.exports = function(app){
	
	var init = function(){
	
			
	};

	var createCustomer = function(customerInfo, callback){

		var newCustomer = new customer({
			name:customerInfo.name,
			description:customerInfo.description,
			status: customerInfo.status,
			createdOn: Date.now()
		});	
		
		newCustomer.save(callback);

	};			


	return {
		init: init,
		createCustomer:createCustomer
	}

};
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

	var viewCustomer  = function(filter, skip, limit, callback){
	    filter  = filter || {};
      	limit   = limit  || 10;
      	skip    = skip   || 0;

      	customer.find(filter).limit(limit).skip(skip).exec(callback);
	  }

	return {
		init: init,
		createCustomer:createCustomer,
		viewCustomer:viewCustomer
	}

};
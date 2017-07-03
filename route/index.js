"use strict";


module.exports = function(app){

	var express  = require('express');
	var controller = require('../controller')(app);
	var router = express.Router();
	

	var init = function(){
		route();
	}

	var route = function(){

		app.use('/api/v1/', router);

		router.get('/customer', function(req,res){
			res.send(JSON.stringify());
		})

		router.post('/customer', function(req, res){
		    var customerInfo = req.body;
		    console.log(customerInfo.name);
		    controller.customer.createCustomer(customerInfo, function(error, customer){
		    	if(error){
		    		//TODO:
		    		console.error(error.toString());
		    		res.send(500, error.toString());

		    	}else{
		    		//Render
		    		console.log('Customer Created')
		    	}	
		    })
		    
		});
	}

	return{
		init:init
	}
};
var express 	= require('express');
var bodyparser  = require('body-parser');

var model 		= require("./model");
var routes 		= require("./route");
var controller 	= require("./controller");

const app = express();

app.use(bodyparser.json()); 

app.use(express.static('src'));

model(app).init();
controller(app).init();
routes(app).init();

app.listen(8000);

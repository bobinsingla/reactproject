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

var PORT = process.env.PORT || 8000;

app.listen(PORT);

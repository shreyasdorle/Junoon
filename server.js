//This is used to create local server on port 8001

'use strict';


var express = require('express'),
	app = express(),
	port = process.env.PORT || 8000;
console.log(__dirname);
app.use(express.static(__dirname + '/Public'));

app.listen(port);



var connect = require('connect');
var http = require('http');

var port = 9999;
var app = connect();

http.createServer(app).listen(port);
console.log("Server is Running @ " + port);

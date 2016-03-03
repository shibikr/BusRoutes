var http = require('http');
var controller = require('./routes/controller.js');
var server = http.createServer(controller);
server.listen(8000);
console.log("server started");
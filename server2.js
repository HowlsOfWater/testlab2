// "require" is similar to "import"
var http = require('http');

//defines a port we wil listne to
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var nomo = require('node-monkey').start({host:server_ip_address, port:'8000'});

//A function that handles requests and sends resonses
function handleRequest(request, response){
  response.end('Yes! It Worls!! Path Hit: ' + server_ip_address + ":" + server_port + "/" + request.url); 
  console.log("my server ip address is: " + server_ip_address);
}

//creates a server
var server = htpp.createServer(handleRequest);

//starts the server
server.listen(server_port, server_ip_address, funcction(){
  console.log("HTTP Server listening on: " + server_ip_address + ":" + server_port);
});

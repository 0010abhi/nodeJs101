var http = require('http');
var fs = require('fs');
var port = 8080;


// send 404
function send404response(response){
  response.writeHead(404,{'Context-Type':'text/plain'});
  response.write('Error 404 : Page Not Found');
  response.end();
}
// Simple Data Request.
function onRequest1(request, response){
  console.log("User Made a request ... " + request.url);
  response.writeHead(200,{'Context-Type':'text/html'});
  response.write('Here is Your response.');
  response.end();
}

/* File Requested.
  Dont end the response.
*/
function onRequest2(request, response){
  console.log("User Made a request ... " + request.url +" and "+ request.method);
  if(request.method === 'GET' && request.url === '/'){
    response.writeHead(200,{'Context-Type':'text/html'});
    fs.createReadStream('./index.html').pipe(response);
  } else {
    send404response(response);
  }
}

http.createServer(onRequest2).listen(port);

console.log("Server is Running @ " + port);

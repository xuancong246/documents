var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello world!');
    response.end();
});

server.listen(8000);
console.log('Server is started!');
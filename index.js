const http = require('http');
const {} = require('inspector');
const PORT = 8081;

const requestHandler = (request, response) => {
  if (request.url.indexOf('/home') >= 0) {
    response.writeHead(200, {'Content-type': 'text/json'});
    return response.end('{"url":"homepage"}');
  }
  response.writeHead(200, {'Content-type': 'text/json'});
  return response.end('{"url":"other"}');
};
const server = http.createServer(requestHandler);
server.listen(PORT, (err) => {
  if (err) {
    console.error('Error at server launch:', err);
  }
  console.log(`Server works at port ${PORT}!`);
});

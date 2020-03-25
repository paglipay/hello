const http = require('http');

//const hostname = '192.168.2.81';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});

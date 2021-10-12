const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
  const stream = fs.createReadStream('data2.txt')
  stream.pipe(res)
});
server.listen(3000);
  console.log('Node.js stream on port 3000');

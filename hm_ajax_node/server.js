var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});
var fs = require('fs');

function accept(req, res) {
  if (req.method === 'GET') {
    file.serve(req, res);
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      fs.writeFile('books.json', body, function(error) {
        if (error) throw error;
      })
      req.on('end', function () {
        var POST = querystring.parse(body);
    });
      res.end();
    });
  }
  }

// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8010);
 console.log('Server running on port 8010');
} else {
  exports.accept = accept;
}




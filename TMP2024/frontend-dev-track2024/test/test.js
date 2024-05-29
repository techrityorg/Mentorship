var http = require('http');
var fs = require('fs');
var url = require('url');
var formidable = require('formidable');

// http
//   .createServer(function (req, res) {
//     //Open a file on the server and return its content:
//     fs.readFile('demofile1.html', function (err, data) {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

// http.createServer((req, res) => {
//   var q = url.parse(req.url, true);
//   var filename = '.' + q.pathname;
//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       return res.end('404 Not Found');
//     }
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      res.write('File uploaded');
      res.end();
    })
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
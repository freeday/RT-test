// Modules
const http = require("http");
const fs = require("fs");

// Server configuration
const hostname = "92.53.91.207";
const port = 3000;

// Render page
fs.readFile("./dist/index.html", function(err, html) {
  if (err) {
    throw err;
  }
  const server = http
    .createServer(function(request, response) {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });
      response.end(html);
    })
    .listen(port, hostname, () => {
      // Console
      console.log(`Server running at http://${hostname}:${port}/`);
    });
});

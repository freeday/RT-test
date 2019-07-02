var template = "index.html";

const http = require("http");

const hostname = "92.53.91.207";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.renderFile(template, function(err, result) {
    if (err) {
      console.error(err);
    }
    res.end(result);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

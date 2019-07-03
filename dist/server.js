// Modules
// var path = require("path");
// var express = require("express");
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
// const path = require("path");
// Server configuration
const hostname = "92.53.91.207";
const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port, hostname, () => {
  console.log("JSON Server is running");
});

// const app = express();
// app.use(express.static(path.join(__dirname, "dist")));
// app.get("/", function(req, res) {
//   res.send("Hello World!");
// });

// app.listen(port, hostname, function() {
//   console.log("Example app listening on port 3000!");
// });
// Render page
// fs.readFile("./dist/index.html", { encoding: "utf8" }, function(err, html) {
//   if (err) {
//     throw err;
//   }
//   http
//     .createServer(function(request, response) {
//       response.writeHead(200, {
//         "Content-Type": "text/html; charset=utf-8"
//       });
//       response.end(html);
//     })
//     .listen(port, hostname, () => {
//       // Console
//       console.log(`Server running at http://${hostname}:${port}/`);
//     });
// });

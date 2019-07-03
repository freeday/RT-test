// Modules
var path = require("path");
var express = require("express");

// Server configuration
const hostname = "92.53.91.207";
const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, "dist")));
// app.get("/", function(req, res) {
//   res.send("Hello World!");
// });

app.listen(port, hostname, function() {
  console.log("Example app listening on port 3000!");
});
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

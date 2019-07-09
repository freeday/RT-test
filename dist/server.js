const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const hostname = "92.53.91.207";
// const hostname = "127.0.0.1";
const port = 3000;

server.use(middlewares);

server.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.use(router);

server.listen(port, hostname, () => {
  console.log("JSON Server is running");
});

(function() {
  const path = require("path");
  const jsonServer = require("json-server");
  const server = jsonServer.create();
  const port = 8005;

  const middlewares = jsonServer.defaults();
  const router = jsonServer.router(path.join(__dirname, "myDB.json"));

  server.use(middlewares);
  server.use(router);

  printState(port);

  server.listen(port, () => {
    console.log("Json Server is running");
  });
})();

function printState(port) {
  console.log("\n*************************************");
  console.log("*                                   *");
  console.log(`*    URL: http://localhost:${port}     *`);
  console.log("*                                   *");
  console.log("*************************************\n");
}
(function() {
  const path = require("path");
  const jsonServer = require("json-server");
  const PORT = 8020;

  initMyDB();
  
  const server = jsonServer.create();
  const middlewares = jsonServer.defaults();
  const router = jsonServer.router(path.join(__dirname, "myDB.json"));

  server.use(middlewares);
  server.use(router);

  printState(PORT);

  server.listen(PORT, () => {
    console.log("Json Server is running");
  });
})();

function initMyDB() {
  const _ = require("lodash");
  const faker = require("faker");
  const fs = require("fs");

  const users = _.times(3, idx => ({
    id: idx + 1,
    name: faker.fake("{{name.lastName}} {{name.firstName}}"),
    dept: faker.fake("{{commerce.department}}"),
    city: faker.fake("{{address.cityName}}"),
  }));

  const products = _.times(2, idx => ({
    id: 1001 + idx,
    productName: faker.fake("{{commerce.productName}}"),
    price: faker.fake("{{commerce.price}}"),
    brand: faker.fake("{{company.companyName}} {{company.companySuffix}}"),
  }));

  fs.writeFileSync("./myDB.json", JSON.stringify(
    {
      users,
      products,
    }
  ));
}

function printState(port) {
  console.log("\n*************************************");
  console.log("*                                   *");
  console.log(`*    URL: http://localhost:${port}     *`);
  console.log("*                                   *");
  console.log("*************************************\n");
}
(function() {
  const faker = require("faker");
  const fullName = faker.fake("{{name.middleName}} {{name.lastName}}, {{name.firstName}}");
  console.log("Mock 데이터: ", fullName);
})();
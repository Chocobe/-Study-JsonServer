const _ = require("lodash");
const faker = require("faker");

module.exports = () => {
  const users = _.times(5, idx => ({
    id: idx,
    name: faker.fake("{{name.middleName}} {{name.lastName}}, {{name.firstName}}"),
    job: faker.fake("{{name.jobType}}"),
    phone: faker.fake("{{phone.phoneNumber}}"),
  }));

  return { users };
};
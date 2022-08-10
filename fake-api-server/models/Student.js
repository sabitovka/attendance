const { faker } = require('@faker-js/faker');
const { randomNumber } = require('../utils.js')

faker.locale = 'ru';

const NAME = 'students';
const count = 120;

const createRandomStudent = (id) => ({
  id,
  fullname: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.address.streetAddress(),
  groupId: randomNumber(1, 20),
});

const generate = () => Array.from({ length: count }).map((_, index) => createRandomStudent(index + 1));

module.exports = {
  NAME, generate
}
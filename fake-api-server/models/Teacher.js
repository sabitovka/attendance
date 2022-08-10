const { faker } = require('@faker-js/faker');

faker.locale = 'ru';

const NAME = 'teachers';
const count = 15;

const createRandomTeacher = (id) => ({
  id,
  fullname: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
});

const generate = () => Array.from({ length: count }).map((_, index) => createRandomTeacher(index + 1));

module.exports = {
  NAME, generate
}
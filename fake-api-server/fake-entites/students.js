const { faker } = require('@faker-js/faker');

faker.locale = 'ru';

export const NAME = 'students';
const count = 120;

const createRandomStudent = (id) => ({
  id,
  fullname: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.address.streetAddress(),
  groupId: randomNumber(1, 20),
});

export const generate = () => Array.from({ length: count }).map((_, index) => createRandomStudent(index + 1));
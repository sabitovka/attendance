const fs = require('fs');
const { faker } = require('@faker-js/faker');

faker.locale = 'ru';

const TEACHERS_INFO = {
  name: 'teachers',
  count: 15
};

const createRandomTeacher = (id) => ({
  id,
  fullname: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
});

const writeObjToJsonFile = (filename, jsonObject) => {
  if (!fs.existsSync('obj')) {
    fs.mkdirSync('obj/')
  }
  const jsonString = JSON.stringify({ [filename]: jsonObject });
  fs.writeFileSync(`obj/${filename}.json`, jsonString, 'utf-8');
};

const generateObjects = () => {
  const teachers = Array.from({ length: TEACHERS_INFO.count }).map((_, index) => createRandomTeacher(index + 1));
  writeObjToJsonFile(TEACHERS_INFO.name, teachers);
}

const compileObjects = () => {
  const filesToRead = [
    TEACHERS_INFO.name,
  ];

  const dbJson = {};
  filesToRead.forEach((filename) => {
    const data = fs.readFileSync(`obj/${filename}.json`, 'utf-8');
    Object.assign(dbJson, JSON.parse(data));
  });
  const dbJsonString = JSON.stringify(dbJson);
  fs.writeFileSync(`db.json`, dbJsonString, 'utf-8');
}

module.exports = {
  compileObjects, generateObjects
}
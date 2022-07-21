const fs = require('fs');
const { faker } = require('@faker-js/faker');

faker.locale = 'ru';

const TEACHERS_INFO = {
  name: 'teachers',
  count: 15
};

const STUDENTS_INFO = {
  name: 'students',
  count: 120,
}

const GROUPS_INFO = {
  name: 'groups',
  count: 20,
  groupNames: [
    {
      name: 'ПКС',
      specility: 'Программирование в компьютерных системах',
    },
    {
      name: 'ЭМО',
      specility: 'Техническая эксплуатация и обслуживание электрического и электромеханического оборудования горной промышленности',
    },
    {
      name: 'МД',
      specility: 'Маркшейдерское дело',
    },
    {
      name: 'ПРПИ',
      specility: 'Подземная разработка месторождений полезных ископаемых'
    },
    {
      name: 'ШС',
      specility: 'Шахтное строительство'
    }
  ]
}

// Function to generate random number 
function randomNumber(min, max) { 
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

const createRandomTeacher = (id) => ({
  id,
  fullname: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
});

const createRandomStudent = (id) => ({
  id,
  fullname: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.address.streetAddress(),
  groupId: randomNumber(1, GROUPS_INFO.count),
});

const createRandomGroup = (id) => {
  const groupObject = Object.assign({ id }, GROUPS_INFO.groupNames[(id-1) % GROUPS_INFO.groupNames.length]);
  const groupNumber = Math.floor(15 + id / GROUPS_INFO.groupNames.length);
  groupObject.name = `${groupObject.name}-${groupNumber}`
  return groupObject;
};

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

  const groups = Array.from({ length: GROUPS_INFO.count }).map((_, index) => createRandomGroup(index + 1));
  writeObjToJsonFile(GROUPS_INFO.name, groups);

  const students = Array.from({ length: STUDENTS_INFO.count }).map((_, index) => createRandomStudent(index + 1));
  writeObjToJsonFile(STUDENTS_INFO.name, students);
}

const compileObjects = () => {
  const filesToRead = [
    TEACHERS_INFO.name,
    STUDENTS_INFO.name,
    GROUPS_INFO.name,
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
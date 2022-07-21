const fs = require('fs');
const { faker } = require('@faker-js/faker');

const groups = require('./fake-entites/groups.js');
const teachers = require('./fake-entites/teachers.js');
const students = require('./fake-entites/students.js');

faker.locale = 'ru';

const writeObjToJsonFile = (filename, jsonObject) => {
  if (!fs.existsSync('obj')) {
    fs.mkdirSync('obj/')
  }
  const jsonString = JSON.stringify({ [filename]: jsonObject });
  fs.writeFileSync(`obj/${filename}.json`, jsonString, 'utf-8');
};

const generateObjects = () => {
  writeObjToJsonFile(teachers.NAME, teachers.generate());
  writeObjToJsonFile(groups.NAME, groups.generateGroups());
  writeObjToJsonFile(students.NAME, students.generate());
}

const compileObjects = () => {
  const filesToRead = [
    teachers.NAME,
    students.NAME,
    groups.NAME,
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
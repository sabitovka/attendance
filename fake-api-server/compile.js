const fs = require('fs');
const { faker } = require('@faker-js/faker');

const groups = require('./fake-entites/groups.js');
const teachers = require('./fake-entites/teachers.js');
const students = require('./fake-entites/students.js');
const lessons = require('./fake-entites/lessons.js');
const disciplines = require('./fake-entites/disciplines.js');
const lessonWeeks = require('./fake-entites/lessonWeeks.js');
const days = require('./fake-entites/days.js');
const bells = require('./fake-entites/bells.js');

faker.locale = 'ru';

const writeObjToJsonFile = (filename, jsonObject) => {
  if (!fs.existsSync('obj')) {
    fs.mkdirSync('obj/')
  }
  const jsonString = JSON.stringify({ [filename]: jsonObject });
  fs.writeFileSync(`obj/${filename}.json`, jsonString, 'utf-8');
};

const generateObjects = (overwrite = true) => {
  [
    teachers, groups, students, disciplines, lessonWeeks, days, bells, lessons
  ].forEach((obj) => {
    if (!fs.existsSync(`obj/${obj.NAME}.json`) || overwrite) {
      writeObjToJsonFile(obj.NAME, obj.generate());
    }
  });
}

const compileObjects = () => {
  const filesToRead = [
    teachers, groups, students, disciplines, lessonWeeks, days, bells, lessons
  ];

  const dbJson = {};
  filesToRead.forEach((obj) => {
    const data = fs.readFileSync(`obj/${obj.NAME}.json`, 'utf-8');
    Object.assign(dbJson, JSON.parse(data));
  });
  const dbJsonString = JSON.stringify(dbJson);
  fs.writeFileSync(`db.json`, dbJsonString, 'utf-8');
}

module.exports = {
  compileObjects, generateObjects
}
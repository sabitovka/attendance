const fs = require('fs');
const { faker } = require('@faker-js/faker');

const groups = require('./models/Group.js');
const teachers = require('./models/Teacher.js');
const students = require('./models/Student.js');
const lessons = require('./models/Lesson.js');
const disciplines = require('./models/Discipline.js');
const lessonWeeks = require('./models/LessonWeek.js');
const days = require('./models/Day.js');
const bells = require('./models/Bell.js');

faker.locale = 'ru';

const baseBundleDirName = 'bundle';

const writeObjToJsonFile = (filename, jsonObject) => {
  if (!fs.existsSync(baseBundleDirName)) {
    fs.mkdirSync(baseBundleDirName)
  }
  const jsonString = JSON.stringify({ [filename]: jsonObject });
  fs.writeFileSync(`${baseBundleDirName}/${filename}.json`, jsonString, 'utf-8');
};

const generateObjects = (overwrite = true) => {
  [
    teachers, groups, students, disciplines, lessonWeeks, days, bells, lessons
  ].forEach((obj) => {
    if (!fs.existsSync(`${baseBundleDirName}/${obj.NAME}.json`) || overwrite) {
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
    const data = fs.readFileSync(`${baseBundleDirName}/${obj.NAME}.json`, 'utf-8');
    Object.assign(dbJson, JSON.parse(data));
  });
  const dbJsonString = JSON.stringify(dbJson);
  fs.writeFileSync(`db.json`, dbJsonString, 'utf-8');
}

module.exports = {
  compileObjects, generateObjects
}
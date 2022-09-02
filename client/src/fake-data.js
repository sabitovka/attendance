export const attendanceData = {
  groupName: "ИСзск-19",
  classes: [
    { time: "08:00 - 09:20", discipline: "Системный анализ", teacher: "Волков Андрей Петрович" },
    { time: "09:30 - 11:50", discipline: "Программирование встроенных устройств", teacher: "Савин Евгений Павович" },
    { time: "12:10 - 13:30", discipline: null, teacher: null },
    { time: "13:40 - 15:00", discipline: "Data Mining", teacher: "Сергеев Сергей Сергеевич" },
  ],
  students: [
    { _id: "1", name: "Крупин Сергей Валентинович", marks: { 0: true, 1: true, 3: false } },
    { _id: "2", name: "Быков Марк Васильевич", marks: { 0: false, 1: false, 3: false } },
    { _id: "3", name: "Северин Анатолий Иванович", marks: { 0: true, 1: true, 3: true } },
    { _id: "4", name: "Тихомиров Станислав Владимирович", marks: { } },
  ],
};

export const groups = [
  {
    id: 1,
    name: "ИСзск-19",
  },
  {
    id: 2,
    name: "ПКС-15",
  },
  {
    id: 3,
    name: "Б-12",
  },
  {
    id: 4,
    name: "ЭМО-16/1",
  },
];

export const statementData = {
  groupName: "ИСзск-19",
  students: [
    { _id: "1", name: "Крупин Сергей Валентинович", 
      misses: [
        {
          date: "09.04.2022",
          lessonNumber: "1",
          lessonName: "Системное программирование",
          validReason: true,
        },
        {
          date: "09.04.2022",
          lessonNumber: "2",
          lessonName: "Алгоритмизация",
          validReason: false,
        },
      ]
    },
    { _id: "2", name: "Быков Марк Васильевич", 
      misses: [
        {
          date: "10.04.2022",
          lessonNumber: "1",
          lessonName: "Физра",
          validReason: false,
        },
      ]
    },
    { _id: "3", name: "Северин Анатолий Иванович", 
      misses: [],
    },
    { _id: "4", name: "Тихомиров Станислав Владимирович", 
      misses: [] 
    },
  ]
};

export const absence20students = [
  { 
    _id: "1", name: "Крупин Сергей Валентинович", 
    group: {_id: 1, name: "ИСзск-19"}, 
    percent: 73.4 
  },
  { 
    _id: "2", name: "Быков Марк Васильевич", 
    group: {_id: 2, name: "ПКС-15"}, 
    percent: 66.3 
  },
  { 
    _id: "3", name: "Северин Анатолий Иванович",
    group: {_id: 1, name: "ИСзск-19"}, 
    percent: 0.0 
  },
  { 
    _id: "4", name: "Тихомиров Станислав Владимирович", 
    group: {_id: 3, name: "ЭМО-1/4"}, 
    percent: 11.6  },
];

export const markApiData = {
  "data": {
    "bells": [
      {
        "id": "1",
        "startTime": "08:15:00",
        "endTime": "09:35:00",
        "lessons": [
          {
            "id": "18",
            "discipline": {
              "shortName": "Осн. прогр."
            },
            "teacher": {
              "fullname": "Анжела Мишина"
            }
          }
        ]
      },
      {
        "id": "2",
        "startTime": "09:45:00",
        "endTime": "11:05:00",
        "lessons": [
          {
            "id": "19",
            "discipline": {
              "shortName": "Элем. в. мат."
            },
            "teacher": {
              "fullname": "Надежда Блинова"
            }
          }
        ]
      },
      {
        "id": "3",
        "startTime": "11:25:00",
        "endTime": "12:45:00",
        "lessons": [
          {
            "id": "20",
            "discipline": {
              "shortName": "Операц. сист."
            },
            "teacher": {
              "fullname": "Викторин Киселев"
            }
          }
        ]
      },
      {
        "id": "4",
        "startTime": "12:50:00",
        "endTime": "14:10:00",
        "lessons": [
          {
            "id": "21",
            "discipline": {
              "shortName": "Физ-ра"
            },
            "teacher": {
              "fullname": "Серафим Белов"
            }
          }
        ]
      }
    ],
    "group": {
      "id": "1",
      "name": "ПКС-15",
      "students": [
        {
          "id": "1",
          "fullname": "Раиса Сорокина",
          "marks": []
        },
        {
          "id": "25",
          "fullname": "Артем Ковалев",
          "marks": []
        },
        {
          "id": "42",
          "fullname": "Агата Ермакова",
          "marks": []
        },
        {
          "id": "63",
          "fullname": "Елена Ефимова",
          "marks": []
        },
        {
          "id": "110",
          "fullname": "Василий Михайлов",
          "marks": []
        }
      ]
    }
  }
}
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
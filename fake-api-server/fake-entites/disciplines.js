const NAME = 'disciplines';

const generate = () => {
  const disciplines = [
    {
      id: 1,
      fullName: 'Основы программирования',
      shortName: 'Осн. прогр.',
      abbrevation: 'ОП',
    },
    {
      id: 2,
      fullName: 'Элементы высшей математики',
      shortName: 'Элем. в. мат.',
      abbrevation: 'ЭВМ',
    },
    {
      id: 3,
      fullName: 'Операционные системы',
      shortName: 'Операц. сист.',
      abbrevation: 'ОС',
    },
    {
      id: 4,
      fullName: 'Физкультура',
      shortName: 'Физ-ра',
      abbrevation: 'Физ-ра',
    },
    {
      id: 5,
      fullName: 'Технология использования прикладного ПО для ЭВМ',
      shortName: 'Техн.исп.прикл.ПО',
      abbrevation: 'ТИПО',
    },
    {
      id: 6,
      fullName: 'Технология работы с аппаратным обеспечением и операционной системой ЭВМ',
      shortName: 'Техн.раб.с апп.об.',
      abbrevation: 'ТРАО',
    },
    {
      id: 7,
      fullName: 'Оснонвы природопользования',
      shortName: 'Осн. природопольз.',
      abbrevation: 'Осн. природопольз.',
    },
    {
      id: 8,
      fullName: 'Основы психологии',
      shortName: 'Осн. психолог.',
      abbrevation: 'Осн. психолог.',
    },
    {
      id: 9,
      fullName: 'Иностранный язык',
      shortName: 'Ин. яз.',
      abbrevation: 'Ин. яз.',
    },
    {
      id: 10,
      fullName: 'Социология',
      shortName: 'Социология',
      abbrevation: 'Социология',
    },
  ];

  return disciplines;
}

module.exports = {
  NAME, generate
}
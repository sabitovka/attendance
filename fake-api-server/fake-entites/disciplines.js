export const NAME = 'disciplines';

export const generate = () => {
  const disciplines = [
    {
      fullName: 'Основы программирования',
      shortName: 'Осн. прогр.',
      abbrevation: 'ОП',
    },
    {
      fullName: 'Элементы высшей математики',
      shortName: 'Элем. в. мат.',
      abbrevation: 'ЭВМ',
    },
    {
      fullName: 'Операционные системы',
      shortName: 'Операц. сист.',
      abbrevation: 'ОС',
    },
    {
      fullName: 'Физкультура',
      shortName: 'Физ-ра',
      abbrevation: 'Физ-ра',
    },
    {
      fullName: 'Технология использования прикладного ПО для ЭВМ',
      shortName: 'Техн.исп.прикл.ПО',
      abbrevation: 'ТИПО',
    },
    {
      fullName: 'Технология работы с аппаратным обеспечением и операционной системой ЭВМ',
      shortName: 'Техн.раб.с апп.об.',
      abbrevation: 'ТРАО',
    },
    {
      fullName: 'Оснонвы природопользования',
      shortName: 'Осн. природопольз.',
      abbrevation: 'Осн. природопольз.',
    },
    {
      fullName: 'Основы психологии',
      shortName: 'Осн. психолог.',
      abbrevation: 'Осн. психолог.',
    },
    {
      fullName: 'Иностранный язык',
      shortName: 'Ин. яз.',
      abbrevation: 'Ин. яз.',
    },
    {
      fullName: 'Социология',
      shortName: 'Социология',
      abbrevation: 'Социология',
    },
  ];

  return disciplines.map((discipline, index) => ({ id: index+1, ...discipline }));
}
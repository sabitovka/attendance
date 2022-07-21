export const NAME = 'groups';
const COUNT = 20;
const START_YEAR_SUFFIX = 15;
const GROUP_NAMES = [
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
];

const createRandomGroup = (id) => {
  const groupObject = Object.assign({ id }, GROUP_NAMES[(id - 1) % GROUP_NAMES.length]);
  const groupNumber = Math.floor(START_YEAR_SUFFIX + id / GROUP_NAMES.length);
  groupObject.name = `${groupObject.name}-${groupNumber}`
  return groupObject;
};

export const generateGroups = () => {
  return Array.from({ length: COUNT }).map((_, index) => createRandomGroup(index + 1));
}
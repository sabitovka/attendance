const NAME = 'bells';

const generate = () => {
  return [
    {
      id: 1,
      startTime: '08:15:00',
      endTime: '09:35:00',
    },
    {
      id: 2,
      startTime: '09:45:00',
      endTime: '11:05:00',
    },
    {
      id: 3,
      startTime: '11:25:00',
      endTime: '12:45:00',
    },
    {
      id: 4,
      startTime: '12:50:00',
      endTime: '14:10:00',
    },
  ]
}

module.exports = {
  NAME, generate
}
export const navigation = [
  {
    role: {
      id: 0,
      name: 'student',
      title: 'Студент'
    },
    actions: [
      {title: "Просмотреть статистику", link: '/statistic'}
    ]
  },
  {
    role: {
      id: 1,
      name: 'warden',
      title: 'Староста'
    },
    actions: [
      { title: 'Заполнить журнал посещаемости', link: '/journal', },
      { title: 'Просмотреть посещаемость', link: '/statement', },
    ]
  }, 
  {
    role: {
      id: 2,
      name: 'teacher',
      title: 'Преподаватель'
    },
    actions: [
      { title: '', link: '#/teacher-1', },
      { title: '', link: '#/teacher-2', },
    ]
  },
  {
    role: {
      id: 3,
      name: 'branch-manager',
      title: 'Староста'
    },
    actions: [
      { title: 'Список пропустивших более 20% занятий', link: '/absence20', },
      { title: 'Ведомости групп', link: '/statement', },
    ]
  }
]
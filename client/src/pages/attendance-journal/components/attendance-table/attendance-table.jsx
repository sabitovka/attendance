import React, { useMemo } from 'react'

import Table from './table'
import ColumnHeader from "./column-header"
import MarkCheckbox from "./mark-checkbox"

export function AttendanceTable({ data, date }) {
  const columns = useMemo(() => [
    {
      Header: 'ФИО Студента',
      accessor: 'fullname',
      minWidth: 200,
    },
    {
      Header: 'Занятия',
      columns: data?.bells?.map((bell) => ({
        Header: () => <ColumnHeader bell={bell}/>,
        Cell: ({ cell: { value }}) => <MarkCheckbox mark={value} />,
        accessor: `lesson${bell.id}`,
        maxWidth: 150,
        minWidth: 50,
        width: 50,
      }))
    }
  ], [data.bells]);

  const students = useMemo(() => data.students.map((student) => {
    const marks = {};
    data.bells.forEach((bell) => {
      const lessonExists = bell.lessons.length > 0;
      const mark = student.marks.find((mark) => lessonExists && +bell.lessons[0].id === mark.lessonId);
      if (mark && lessonExists) {
        marks[`lesson${bell.id}`] = mark;
      } else if (!mark && lessonExists) {
        marks[`lesson${bell.id}`] = { 
          studentId: student.id,
          lessonId: bell.lessons[0].id,
          markDate: date,
          isToCreate: true,
        };
      } else {
        marks[`lesson${bell.id}`] = null;
      }
    })
    return {
      ...marks,
      fullname: student.fullname
    }
  }), [data]);

  console.log(students);

  /* const data = useMemo(() => [
    {
      fullname: "test",
      shortName1: 'test 1',
      shortName2: 'test2',
    },
    {
      fullname: "test",
      shortName1: 'test 1',
      shortName2: 'test 2',
    },
    {
      fullname: "test",
      shortName1: 'test 1',
      shortName2: 'test 2',
    }
  ]) */

  return (
    <Table columns={columns} data={students} />
  )

  /* return (
    <table className="table table-bordered table-attendance">
      <thead>
        <tr>
          <th className="align-middle w-25" scope="col">Список студентов</th>

          { bells.map((bell, index) => {
            return (
              <th className="text-wrap text-truncate align-top" key={`cl-${index}` }>
                <div className="d-flex flex-column text-center">
                  <span className="text-muted">{`${bell.startTime}-${bell.endTime}`}</span>
                  { bell.lessons.length > 0 ? 
                  (<>
                    <span className="lh-1 mb-2">{ bell.lessons[0].discipline.shortName }</span>
                    <span className="lh-1">{ bell.lessons[0].teacher.fullname }</span>
                  </>) : <span className="text-muted">Нет пары</span> } 
                </div> 
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {
          students.map(student => {
          return (
            <tr key={student.id} className="align-middle">
              <td>{student.fullname}</td>
                { bells.map((bell, index) => {
                  const mark = student.marks.find((mark) => bell.lessons.length > 0 && bell.lessons[0].id === mark.lessonId);
                  return (
                    <td key={`st-${student.id}-m-${index}`}>
                      <div className="d-flex justify-content-center align-items-center">
                        <MarkCheckbox mark={mark} />
                      </div>
                    </td> 
                  )
              }) }
            </tr>
          )})
        }

      </tbody>
    </table>
  ) */
}
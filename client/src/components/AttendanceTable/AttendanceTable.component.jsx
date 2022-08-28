import React, { useMemo, useCallback, useEffect } from 'react'

import Table from './Table'
import ColumnHeader from "./ColumnHeader"
/* import { useLazyQuery } from '@apollo/client';

import { MarkCheckbox } from './MarkCheckbox/MarkCheckbox.component'
import { GET_ATTENDANCE_OF_GROUP } from '../../Queries'; */
import { markApiData } from '../../fake-data'
import { useState } from 'react'

export function AttendanceTable({ date }) {
  //const [executeQuery, { loading, error, data }] = useLazyQuery(GET_ATTENDANCE_OF_GROUP);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const fetchAttendanceData = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setData(markApiData);
    }, 1000)
    setLoading(false);
   /*  getAttendanceData({ variables: {
      groupId: 1, dayId: 1, weekId: 1, markDate: "2022-08-18"
    } });
    console.log(selectedDate, error, loading, data) */
  })
  
  useEffect(() => {
    fetchAttendanceData()
  }, [fetchAttendanceData])

  const columns = useMemo(() => [
    {
      Header: 'ФИО Студента',
      accessor: 'fullname',
      minWidth: 200,
    },
    {
      Header: 'Занятия',
      columns: data.data.bells.map((bell) => ({
        Header: () => <ColumnHeader bell={bell}/>,
        accessor: `lesson${bell.id}`,
        maxWidth: 150,
        minWidth: 50,
        width: 50,
      }))
    }
  ]);

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
    <Table columns={columns} data={data} />
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
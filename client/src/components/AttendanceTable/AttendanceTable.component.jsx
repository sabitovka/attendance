import React from 'react'
import { useState } from 'react'
import { MarkCheckbox } from './MarkCheckbox/MarkCheckbox.component'

export const AttendanceTable = ({ bells, students }) => {
  return (
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
  )
}
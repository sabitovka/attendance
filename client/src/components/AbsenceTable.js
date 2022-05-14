import React from "react";

export const AbsenceTable = ({ students }) => {

  return (
    <table className="mt-3 table table-hover table-striped">
      <thead> 
        <tr>
          <th scope="col">ФИО студента</th>
          <th scope="col">Группа</th>
          <th scope="col">Посещено занятий, %</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(student => {
            return (
              <tr key={student._id}>
                <th scope="row">{ student.name }</th>
                <td>{ student.group.name }</td>
                <td>{ student.percent }</td> 
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )

}
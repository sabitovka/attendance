import React from 'react'

export const AttendanceTable = ({ data }) => {
  return (
    <table className="table table-bordered table-attendance">
      <thead>
        <tr>
          <th className="align-middle w-25" scope="col">Список студентов</th>

          { data.classes.map((aClass, index) => {
            return (
              <th className="text-wrap text-truncate align-top" key={`cl-${index}`}>
                <div className="d-flex flex-column text-center">
                  <span className="text-muted">{ aClass.time }</span>
                  { aClass.discipline ? 
                  (<>
                    <span className="lh-1 mb-2">{ aClass.discipline }</span>
                    <span className="lh-1">{ aClass.teacher }</span>
                  </>) : <span className="text-muted">Нет пары</span> } 
                </div> 
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>

        {
          data.students.map(student => {
          return (
            <tr key={student._id} className="align-middle">
              <td>{student.name}</td>
                { data.classes.map((_, index) => {
                  return (
                    <td key={`st-${student._id}-m-${index}`}>
                      <div className="d-flex justify-content-center align-items-center">
                        {!!_.discipline && <input className="px-auto" type="checkbox" checked={!!student.marks[index]}/> }
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
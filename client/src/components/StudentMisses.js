import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const StudentMisses = ({ student }) => {
  return (
    <>
      { student.misses.length ? <table className="table border-primary mb-0" style={{ fontSize: 13 + "px" }}>
        <thead className="p-1">
          <tr>
            <th>Дата</th>
            <th>Пара</th>
            <th className="text-center">Уважительная причина?</th>
          </tr>
        </thead>
        <tbody>
          {
            student.misses.map((miss, idx) => {
              return (
                <tr key={`miss-${student._id}/${idx}`}>
                  <th className="w-25">{ miss.date }</th>
                  <td>{ miss.lessonNumber }. { miss.lessonName }</td>
                  <td className="text-center w-25">
                    <ToggleButtonGroup name={`miss-${student._id}/${idx}`} type="radio" 
                    defaultValue={`miss-${student._id}/${idx}/${+!miss.validReason}`}>
                      <ToggleButton id={`miss-${student._id}/${idx}/${0}`} value={`miss-${student._id}/${idx}/${0}`} variant="outline-success" size="sm">
                        Да
                      </ToggleButton>
                      <ToggleButton id={`miss-${student._id}/${idx}/${1}`} value={`miss-${student._id}/${idx}/${1}`} variant="outline-danger" size="sm">
                        Нет
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
    </table> : 
    <div>
      Пропусков нет  
    </div>}
  </>
  )
}
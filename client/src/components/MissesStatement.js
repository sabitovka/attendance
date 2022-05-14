import React from "react";
import { StudentMisses } from "./StudentMisses";
import { Accordion } from "react-bootstrap";

export const MissesStatement = ({ data }) => {

  return (
    <Accordion>
      {
        data.students.map((student, index) => {

          const validReasonsCount = student.misses.filter(miss => miss.validReason).length;
          const invalidReasonsCount = student.misses.filter(miss => !miss.validReason).length;

          return (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <div className="d-flex justify-content-between w-100 align-items-center pe-4">
                  <span className="fw-bolder">{index+1}. {student.name}</span>
                  <div className={`d-flex align-items-center border border-primary px-3 rounded-1 ${!(validReasonsCount+invalidReasonsCount) && 'd-none'}`}>
                    <div>Ув.: {validReasonsCount}<br/>Неув.: {invalidReasonsCount}</div>
                    <div className="ms-3">Всего: {validReasonsCount+invalidReasonsCount}</div>
                  </div>
                </div>
                </Accordion.Header>
              <Accordion.Body>
                <StudentMisses student={data.students[index]} />
              </Accordion.Body>
            </Accordion.Item>
          )
        })
      }
    </Accordion>  
  );
}
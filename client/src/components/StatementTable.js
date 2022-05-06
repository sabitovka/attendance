import React, { useEffect, useState } from "react";
import { StudentMisses } from "./StudentMisses";
import { Button, Modal, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StatementTable = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentStudentInfo, setCurrentStudentInfo] = useState();

  const handleClose = () => {
    setShowModal(false);
    setCurrentStudentInfo(null);
  };

  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (currentStudentInfo) {
      handleShow();
    }
  }, [currentStudentInfo]);

  return (
    <>
      <table className="mt-3 table table-hover table-bordered">
        <thead> 
          <tr>
            <th rowSpan="2" scope="col" className="align-middle text-center">#</th>
            <th rowSpan="2" scope="col" className="align-middle">ФИО студента</th>
            <th colSpan="3" scope="col" className="text-center">Пропусков</th>
          </tr>
          <tr>
            <th scope="col" className="text-center">Уважительных</th>
            <th scope="col" className="text-center">Неуважительных</th>
            <th scope="col" className="text-center">Всего</th>
          </tr>
        </thead>
        <tbody>
          
          {
            data.students.map((student, idx) => {
              const validReasonsCount = student.misses.filter(miss => miss.validReason).length;
              const invalidReasonsCount = student.misses.filter(miss => !miss.validReason).length;
              return (
                <>
                  <tr key={`student-${idx}`} onClick={(() => {
                    setCurrentStudentInfo(data.students[idx]);
                  })}>
                    <th scope="row" className="align-middle text-center">{idx+1}</th>
                    <th scope="row">{ student.name }</th>
                    <td className="text-center">{ validReasonsCount }</td>
                    <td className="text-center">{ invalidReasonsCount }</td>
                    <td className="text-center">{ validReasonsCount + invalidReasonsCount }</td>                  
                  </tr>
                  <table>
                    <tbody>
                    {
                      student.misses.map((miss, idx) => {
                        <tr key={`miss-${student._id}/${idx}`}>
                          <th>{ miss.date }</th>
                          <td>{ miss.lessonNumber }</td>
                          <td>{ miss.lessonName }</td>
                          <td>
                            <ToggleButtonGroup type="checkbox" defaultValue={+!miss.validReason}>
                              <ToggleButton id="tbg-btn-1" value={0} bg="success">
                                Да
                              </ToggleButton>
                              <ToggleButton id="tbg-btn-2" value={1} bg="danger">
                                Нет
                              </ToggleButton>
                            </ToggleButtonGroup>
                          </td>
                        </tr>
                      })
                    }
                    </tbody>
                  </table>
                  { currentStudentInfo && 
                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header>
                      {currentStudentInfo.name}
                    </Modal.Header>
                    <Modal.Body>
                      <StudentMisses student={currentStudentInfo} />
                    </Modal.Body>
                  </Modal>}
                </>
              )
            })
          }

        </tbody>
      </table>

    </>
  );
}
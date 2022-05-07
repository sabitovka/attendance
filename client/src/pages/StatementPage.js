import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { MissesStatement } from "../components/MissesStatement";
import { PeriodButtonsMonth } from "../components/PeriodButtonsMonth";
import { groups as groupsList, statementData } from "../fake-data";

export const StatementPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [groups, setGroups] = useState();
  const [currentGroup,  setCurrentGroup] = useState();

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
    !groups && setGroups(groupsList)
  }
  
  const fetchGroup = (groupId) => {
    setCurrentGroup(statementData);
    setShowModal(false);
  }

  return (
    <main className="main">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mt-3 mb-4">
            Ведомость посещаемости группы 
            <span className="btn badge bg-primary ms-2" onClick={handleShow}>
              { currentGroup ? currentGroup.groupName : 
                "Выбрать..."  
              }
            </span>
          </h4>
          <div className={`${!currentGroup && 'd-none'}`}>
            <Button variant="primary">
              Скачать
              <FontAwesomeIcon icon={faFileArrowDown} className={"ms-2"} />
            </Button>
          </div>
        </div>

        { currentGroup && <PeriodButtonsMonth onPeriodSelected={((period) => fetchGroup(currentGroup.id, period))} /> }
        { currentGroup && <MissesStatement data={statementData} />}

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Список групп</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            { groups ?  
              <ListGroup defaultActiveKey="#link1" variant="flush">
                {
                  groups.map(group => {
                    return (
                      <ListGroup.Item action key={group.id} onClick={(() => fetchGroup(group.id))}>
                        {group.name}
                      </ListGroup.Item>      
                    )
                  })
                }
              </ListGroup> 
              : <div>Загрузка...</div>   
            }
          </Modal.Body>

        </Modal>

      </div>
    </main>
            
  );

}
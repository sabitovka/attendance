import { Modal } from "react-bootstrap";

export default function GroupsListModal() {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Список групп</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
      </Modal.Body>

    </Modal>
  )
}
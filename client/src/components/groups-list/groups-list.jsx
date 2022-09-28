import { ListGroup } from "react-bootstrap";

export default function GroupsList({ groups, onGroupItemSelected }) {
  if (!groups) {
    return <></>
  }
  return (
    <ListGroup defaultActiveKey="#link1" variant="flush">
      {
        groups.map(group => {
          return (
            <ListGroup.Item action key={group.id} onClick={onGroupItemSelected}>
              {group.name}
            </ListGroup.Item>      
          )
        })
      }
    </ListGroup> 
  )
}
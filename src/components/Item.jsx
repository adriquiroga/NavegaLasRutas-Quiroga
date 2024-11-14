import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item ({item}) {
  return(
    <Col key={item.id}>
      <Card className="h-100 d-flex flex-column">
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.category}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          <Button as = {Link} to ={`/item/${item.id}`}  variant="primary" className="align-self-start mt-auto">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>   

  )
}
export default Item

import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import cardInfo from '../data/CardData';

function Profile() {
    const renderCard = (card, index) => {
        return (
            <Container>
                <Card style={{ width: '18rem' }} key={index}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Text>
                                {card.bio}
                            </Card.Text>
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup> */}
                        <Card.Body>
                            <Card.Link href={card.learnMore}>Learn More About Me!</Card.Link>
                            <Card.Link href={card.github}>Github</Card.Link>
                        </Card.Body>
                    </div>
                </Card>

            </Container>
        )
    }
    return <div>{cardInfo.map(renderCard)}</div>
}

export default Profile

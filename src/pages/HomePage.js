import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsGithub, BsStackOverflow } from 'react-icons/bs';
import cardInfo from '../Data/cardData';

export default function HomePage() {
    return (
        
        <div>
            <h3 align="center">
                Connecticut Codes was created in 2021 and we are a pretty cool group.  
                Come join us at the Starbucks in Rocky Hill on Sunday Mornings!
            </h3>

            <main>
                {cardInfo.map((card, i) => {
                    return <Container>
                        <Card style={{ width: '18rem' }} key={i}>
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
                                    {card.hasPortfolio ? <Card.Link href={card.learnMore}>Portfolio</Card.Link> : null}         
                                    <Card.Link href={card.github}><BsGithub /></Card.Link>
                                    <Card.Link href={card.stackoverflow}><BsStackOverflow /></Card.Link>
                                </Card.Body>
                            </div>
                        </Card>

                    </Container>
                })}
                
            </main>
            
            <footer align="center">
                <br/>
                <p><b>Contact Information</b></p>
                <p>Group email</p>
                <p>Group phone number</p>
            </footer>

        </div>
    );
}
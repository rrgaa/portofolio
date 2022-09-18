import { Col, Container, Row, Card, Button} from "react-bootstrap";
import MyImg2 from "../Images/My-Images-2.jpeg";

function Project () {
    return(
        <div className="Project" id="Project" data-aos="fade-up" data-aos-duration="3000">
            <h1 >This is my Project</h1>
            <Container className="List">
                <Row>
                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={MyImg2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    
                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={MyImg2} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                            </Card>
                    </Col>

                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={MyImg2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    
                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={MyImg2} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                            </Card>
                    </Col>
                </Row>

                <Row>
                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={MyImg2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    
                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={MyImg2} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                            </Card>
                    </Col>

                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={MyImg2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    
                    <Col className="Card">
                            <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={MyImg2} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                            </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Project;
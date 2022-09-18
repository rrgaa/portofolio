import {Button, Col, Container, Row} from "react-bootstrap"
import MyImg2 from "../Images/My-Images-2.jpeg";

function About () {
    return(
        <div className="About" id="About" data-aos="fade-down" data-aos-duration="3000">
                <Container className="About-Wrapper">
             <h1>About Me</h1>
                <Row>
                        <Col >
                                <img src={MyImg2} alt="images" className="Images"/>
                        </Col>
                        <Col className="Text">
                            <p>Hello I'm Dhafa rega call me rrgaa I'm a React Developer and Illustrator/Vector Tracing
                            </p>
                            <p>
                                I have studied programming for more than 1 year and now I can create website using React JS and React Bootstrap in Frontend
                            </p>
                            <p>
                                I can also do Vector Tracing or Illustration in Adobe Illustrator
                                I have made some Illustrations and did Vector tracing
                            </p>
                            <Button variant="dark" className="Button-3 fw-semibold">Contact Me</Button>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}

export default About;
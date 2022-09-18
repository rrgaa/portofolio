import { Button, Col, Container, Row } from "react-bootstrap";
import WhatsappImg from "../Images/whatsapp.png"
import InstagramImg from "../Images/instagram.png"
import GmailImg from "../Images/gmail.png"
import FiverrImg from "../Images/fiverr.png"
import LinkedinImg from "../Images/linkedin.png"

function Contact () {
    return(
        <div className="Contact" id="Contact" data-aos="flip-right">
                <h1 className="fw-bold">Contact Me</h1>
                <p className="fw-semibold">Click link for comission</p>
            <Container className="List">
                <Row className="Whatsapp">
                    <Col className="d-flex justify-content-between">
                        <img src={WhatsappImg} alt="Whatsapp"></img>
                        <p>+62 858 2018 4934</p>
                        <p></p>
                    </Col>
                </Row>
                <Row className="Instagram">
                    <Col className="d-flex justify-content-between">
                        <img src={InstagramImg} alt="Instagram"></img>
                        <p>@rrgaaaa</p>
                        <p className="Link"><a href="https://www.instagram.com/rrgaaaa/">Instagram</a></p>                    
                    </Col>
                </Row>
                <Row className="Gmail">
                    <Col className="d-flex justify-content-between">
                        <img src={GmailImg} alt="Gmail"></img>
                        <p>Dhafarega.09@gmail.com</p>
                        <p></p>
                    </Col>
                </Row>
                <Row className="Fiverr">
                <Col className="d-flex justify-content-between">
                        <img src={FiverrImg} alt="Fiverr"></img>
                        <p>rrgaa</p>
                        <p className="Link"><a href="">Fiverr</a></p>
                    </Col>
                </Row>
                <Row className="Linkedin">
                <Col className="d-flex justify-content-between">
                        <img src={LinkedinImg} alt="Linkedin"></img>
                        <p>r rrgaaa</p>
                        <p className="Link"><a href="https://www.linkedin.com/in/r-rrgaaa-2b3a4a238/">Linkedin</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;
import { Col, Container, Row } from "react-bootstrap";

function Footer () {
    return(
        <div className="Footer">
         <Container className="List">
            <Row>
                <Col>
                    <h4 className="fw-semibold">rrgaa</h4>
                    <p>React Developer</p>
                    <p>Vector Tracing</p>
                </Col> 
                <Col>
                    <h4 className="fw-semibold">Tecnologies</h4>
                    <p>ReactJs</p>
                    <p>React Bootstrap</p>
                    <p>CSS 3</p>
                    <p>HTML 5</p>
                </Col>
                <Col>
                <h4 className="fw-semibold">Social</h4>
                <p><a href="">Instagram</a></p>
                <p><a href="">Fiverr</a></p>
                <p><a href="">Linkedin</a></p>
                <p><a href="">Whatsapp</a></p>
                </Col>
            </Row>
            <p className="Copyright">© 2020 Copyright: rrgaa</p>
        </Container>   
        </div>
    );
}
export default Footer;
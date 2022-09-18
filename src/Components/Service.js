import { Button, Col, Container, Row } from "react-bootstrap";

function Service () {
    return (
        <div className="Service" id="Service" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <Container>
              <h1>What i can do for you ?</h1>  
                <Row className="Wrapper">
                    <Col>
                        <h3>React Developer</h3>
                        <p>I can be your React Developer creating your website or webpage using ReactJs with fully responsive website mobile and desktop,
                           using React-Bootstrap making your website responsive and interactive, i can design your website or webpage if you dont have design
                        </p>
                        <p>Commision For React-Developer Only 10$ or Rp.148300.00</p>
                        <Button href="#Contact" className="fw-semibold">Commision</Button>
                    </Col>
                    <Col>
                        <h3>Vector Tracing</h3>
                        <p>i will redraw of your photos, logo or anything else into a vector with
                            high resolution(300DPI) in Adobe Ilustrator and i can make ilustration with kawai style and whatever you needed on Adobe Ilustrator
                        </p>
                        <p>Commision for Vector Tracing Only 5$ Or Rp.74150.00</p>
                        <Button href="#Contact" className="fw-semibold">Commision</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Service;

import { useState, useEffect } from "react";
import { Col, Container, Row, Button, Image, Card} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import MyImg from "../Images/My-Photos.png";

function Welcome () {
const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "React Developer", "Vector Tracing"];
  const period = 2000;
  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="Welcome" id="home" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <Container className="banner">
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="Welcome-text">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline fs-5 fw-semibold">Welcome To My Porfolio Website Iam</span>
                <h1 className="pb-3">{`rrgaa`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "React Developer", "Vector Tracing"]'><span className="wrap">{text}</span></span></h1>
                  <Button variant="dark" className="fw-semibold Button-2" href="#">About Me</Button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col>
                <div data-aos="fade-up" data-aos-duration="4000">
                  <img src={MyImg} className="Profile"/>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                 
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container> 
    </section>
    );
}

export default Welcome;
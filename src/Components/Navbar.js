import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
  

function Navigasi () {
  return (
    <Navbar expand="lg" sticky='top' className='navbar'>
      <Container>
        <Navbar.Brand href="#home" className='fs-2 fw-bold'>rrgaa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Service">Service</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href='#Contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
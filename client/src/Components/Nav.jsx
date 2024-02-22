import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import News from '../Pages/News';


function myNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-medium ' >Green Guard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/awareness">Awareness</Nav.Link>
            <Nav.Link as={Link} to="/guidelines">Guidelines</Nav.Link>
            <Nav.Link as={Link} to="/complaints">Complaints</Nav.Link>
            <Button variant="success" className='ms-4'>Login</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;
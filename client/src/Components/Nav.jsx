import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function myNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-medium ' >Green Guard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Awareness</Nav.Link>
            <Nav.Link href="#link">Guidelines</Nav.Link>
            <Nav.Link href="#link">Complaints</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="success" className='ms-4'>Login</Button>{' '}
      </Container>
    </Navbar>
  );
}

export default myNavbar;
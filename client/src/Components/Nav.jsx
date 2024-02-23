import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Images/Logo.png';


function myNavbar() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  const navigate = useNavigate();
  function Logout(){
    window.localStorage.clear();
    navigate('/signin');
  }
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark "  sticky="top" >
      <Container>
        <Navbar.Brand as={Link} to="/" className='fs-4 fw-medium ' >
        <img src={logo} alt="Logo" height='50px' width='50px' className='me-2'/>
         Green Guard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 ">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link}  to="/awareness">Awareness</Nav.Link>
            <Nav.Link as={Link}  to="/news">News</Nav.Link>
            <Nav.Link as={Link}  to="/complaints">Complaints</Nav.Link>
            {isLoggedIn ? (
            <Nav.Link onClick={Logout}><Button variant="outline-primary" className='ms-4 border-3'>Logout</Button>{' '}</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/signin">
              <Button variant="outline-success" className='ms-4 border-3'>Login</Button>{' '}
            </Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Form} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import Profile from '../profile';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginModal from './Login';

function NavbarCustom() {
  return (
    <Navbar className='nav' expand="lg">
        <Navbar.Brand className='app' href="#home">Dribble</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navitem' href="/">Home</Nav.Link>
            <Nav.Link className='navitem' href="/profile">Profile</Nav.Link>
            <Nav.Link className='navitem' href="/projects">Projects</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            
            <LoginModal />
          </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCustom;
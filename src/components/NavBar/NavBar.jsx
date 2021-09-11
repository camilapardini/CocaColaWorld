import CartWidget from './CartWidget'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../NavBar/logo.png'


const NavBar =() => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg">
          
  <Container>
  <Navbar.Brand><a href="#home"> <img src = {logo} className= "logo" /> </a></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" >
      <Nav.Link href="#Home"> <a className= "link">Home</a></Nav.Link>
      <Nav.Link href="#Nosotros">  <a className= "link">Nosotros</a></Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Botellas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Latas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Saborizadas</NavDropdown.Item>
      
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="cart"> <CartWidget/></Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        </>
    )
}
export default NavBar
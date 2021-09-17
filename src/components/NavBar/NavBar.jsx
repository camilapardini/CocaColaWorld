import CartWidget from './CartWidget'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../NavBar/logo.png'
import { Link } from "react-router-dom";


const NavBar =() => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg">
          
  <Container>

      
  <Navbar.Brand href="/">
    <a href="/"> <img src = {logo} className= "logo" /></a>
    </Navbar.Brand>


  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">


      <Nav.Link href= "/"> <a className= "link">Home</a></Nav.Link>
    

      <Nav.Link href="#Nosotros"><a className= "link">Nosotros</a></Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">

      
      <NavDropdown.Item href= "/categoria/botellas">Botellas</NavDropdown.Item>
      

      
      <NavDropdown.Item href= "/categoria/latas">Latas</NavDropdown.Item>
     

      
      <NavDropdown.Item href= "/categoria/saborizadas">Saborizadas</NavDropdown.Item>
     

      
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
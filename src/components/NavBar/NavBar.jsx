import CartWidget from './CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from './NavBar.css'


const NavBar =() => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          
  <Container>
  <Navbar.Brand href="#home">ColaCola-World</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" >
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Botellas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Latas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Saborizadas</NavDropdown.Item>
      
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="cart"> <CartWidget /></Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        </>
    )
}
export default NavBar
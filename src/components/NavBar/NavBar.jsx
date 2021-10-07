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

      <Link to="/">
      <Navbar.Brand>
        <img src={logo} className="logo" alt= "logo coca cola" />
      </Navbar.Brand>
      </Link>


      <Navbar.Toggle aria-controls="responsive-navbar-nav" style= {{backgroundColor: "white"}} />
      <Navbar.Collapse id="responsive-navbar-nav" style= {{backgroundColor: "rgb(14, 14, 14)", borderRadius: "10px", zIndex: "10"}} >
        <Nav className="me-auto" >

          <Link to="/" className="nav-link"> Home</Link>

          <Link to="#" className="nav-link"> Nosotros</Link>

          <NavDropdown title="Productos" id="collasible-nav-dropdown">

            <NavDropdown.Item>
              <Link to="/categoria/botellas" className="categorias">
              Botellas
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/categoria/latas" className="categorias">
              Latas
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/categoria/saborizadas" className="categorias">
              Saborizadas
              </Link>
            </NavDropdown.Item>


          </NavDropdown>
        </Nav>
        <Nav>

          <Nav.Link href="cart">
          <Link to="/cart">
            <CartWidget />
            </Link>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

</>
)
}
export default NavBar
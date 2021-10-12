import CartWidget from './CartWidget'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../NavBar/logo.png'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"


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

          <HashLink to="/#nosotros" className="nav-link"> Nosotros</HashLink>

          
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
          
          <NavDropdown.Item>
              <HashLink to="/#conjuntoIconos" className="categorias">
              Ver todo
              </HashLink>
            </NavDropdown.Item>
  
            <NavDropdown.Item>
              <HashLink to="/categoria/botellas/#conjuntoIconos" className="categorias">
              Botellas
              </HashLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
            <HashLink to="/categoria/latas/#conjuntoIconos" className="categorias">
              Latas
              </HashLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
            <HashLink to="/categoria/saborizadas/#conjuntoIconos" className="categorias">
              Saborizadas
              </HashLink>
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

)}

export default NavBar
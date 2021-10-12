import React from 'react'
import './Footer.css'

export const Footer = () => {

return (

    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Nosotros</h3>
                        <ul>
                            <li className= "linksFooter">Carreras</li>
                            <li className= "linksFooter">Trabaja con nosotros</li>
                            <li className= "linksFooter">Resto del mundo</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Legales</h3>
                        <ul>
                            <li className= "linksFooter">Términos y condiciones</li>
                            <li className= "linksFooter">Política de privacidad </li>
                            <li className= "linksFooter">Bases y condiciones</li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Coca Cola Company</h3>
                        <p> El 8 de mayo de 1886, el Dr. John Pemberton sirvió la primera Coca-Cola del mundo en Jacobs´ Pharmacy en Atlanta, Georgia. De esa bebida icónica, nos hemos convertido en una compañía de bebidas total.</p>
                    </div>
                </div>
                <p class="copyright">Camila Pardini © 2021</p>
            </div>
        </footer>
    </div>

)}

export default Footer
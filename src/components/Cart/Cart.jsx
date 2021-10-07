import React from 'react'
import { useCartContext } from "../Context/cartContext"
import { Link } from "react-router-dom"
import "./Cart.css"
import Button from 'react-bootstrap/Button'
import CarroVacio from "../../assets/img/carritovacio.png"
import FaTrash from  "../trashWidget"
import 'firebase/firestore'
import  Checkout from '../Checkout/OffCanvas'


const Cart = () => {
    
    const {cartList, cantidadTotal, clearList, removeItem, precioTotal} = useCartContext ()

    return (
        
    <div className= "bodyCart">
        
        {cartList.length === 0 ? 
        
            <div className= "carritoVacio">   
                <h2>Tu carrito esta vacio</h2> 
                <img src= {CarroVacio} className="imgEnCart" alt="carro vacio" />
                <Link to= {"/"}>
                                <Button className= "botonContador">Ir a productos</Button>
                            </Link>
            </div>
            :   
            
            <>
                {cartList.map(producto =>(

                    <div className="contenedorCardsCarro">
                        <div className="contenedorProd" key={producto.producto.id}>
                            
                            <img src={producto.producto.pictureUrl} className="imgEnCart" alt="imagen producto" />
                            <p>{producto.producto.title}</p>
                            <p>{producto.quantity} unidades</p>
                            <p>${producto.producto.price}</p>
                            <p>${(producto.producto.price * producto.quantity)}</p>
                            <p onClick={()=> removeItem(producto.producto.id)}><FaTrash /></p>
        
                        </div>
                    </div>
        
                ))}

                <div className= "precioTotal">
                <p>Cantidad total de productos: {cantidadTotal()}</p>
                <p>Precio total: ${precioTotal()}</p>
                </div>
                <div className= "botonesCompra">
                <Button className="botonVaciarCarrito" onClick={clearList}>Vaciar carrito</Button>
                <Link to= {"/"}>
                            <Button className= "botonSeguirComprando">Seguir comprando</Button>
                        </Link>
                </div>
                   <Checkout/>         
         </> 
         
        }
    </div>
    
)}

export default Cart
import React from 'react'
import { useCartContext } from '../Context/cartContext'
import "./Cart.css"
import Button from 'react-bootstrap/Button'


const Cart = () => {

const {cartList, price, clearList, removeItem, precioTotal} = useCartContext ()

return (
<div className= "bodyCart">

    {cartList.map(producto =>(
    <>
        <div className="contenedorCardsCarro">
            <div className="contenedorProd" key={producto.producto.id}>
                 
                <img src={producto.producto.pictureUrl} className="imgEnCart" />
                <p>{producto.producto.title}</p>
                <p>{producto.quantity} unidades</p>
                <p>${producto.producto.price}</p>
                <p>${(producto.producto.price * producto.quantity)}</p>
                <Button className="botonContador" onClick={()=> removeItem(producto.producto.id)} >Eliminar producto</Button>

            </div>
        </div>
        
    </>
    
    ))}

    <div className= "precioTotal">
    <p>Precio total: ${precioTotal()}</p>
    </div>
    <Button className="botonContador" onClick={clearList}>Vaciar carrito</Button>

</div>

)}

export default Cart
import React from 'react'
import { useCartContext } from '../Context/cartContext'
import "./Cart.css"
import Button from 'react-bootstrap/Button'


const Cart = () => {

    const {cartList, price, clearList, removeItem} = useCartContext ()

    return  (
        <>  
            <div className= "contenedorCarrito" > 
            <h2> Producto </h2>
            <h2> Cantidad </h2>
            <h2> Precio </h2>
            <h2> Total </h2>
            <h2> Sacar prod </h2>
            </div>

           {cartList.map(producto =>(
               <>
                <div className="contenedorProd" key={producto.producto.id}> 
                    <p>{producto.producto.title}</p>  
                    <p>{producto.quantity}</p>  
                    <p>{producto.producto.price}</p>  
                    <p>{(producto.producto.price * producto.quantity)}</p>
                    <Button className= "botonContador" onClick={removeItem(producto.id)} >Borrar prod</Button>
                </div>
                
                <hr/>
                
                </>
                
            ))}
             <Button className= "botonContador" onClick={clearList} >Borrar listado Cart </Button>
            
        </>
    )



}

export default Cart

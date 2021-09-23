import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'
import { Link } from 'react-router-dom'



const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)


    function sumar (){
        if (count < stock) {
            setCount (count + 1)
        }
    }

    function restar () {
        if (count > 1){
            setCount (count - 1)
        }
    }

    const agregarAlCarrito = () =>{
        onAdd (count)
        setCambiarBoton (false)
    }
    
    

    return (
        <>
   
            <div className= "botones">    
            <Button className= "botonContador" onClick = {restar}>-</Button>
            <label className= "numeroContador"> {count} </label>
            <Button className= "botonContador" onClick = {sumar}>+</Button> <br />
            { cambiarBoton ?
             <Button className= "botonContador" onClick = {agregarAlCarrito}>Agregar al carrito</Button>
                :
                <div>
                    <Link to= {"/cart"}>
                        <Button className= "botonContador">Ir a pagar</Button>
                    </Link>
                    
                    <Link to= {"/"}>
                        <Button className= "botonContador">Seguir comprando</Button>
                    </Link>
                </div>
            }
           
            
            </div>
     </>
    )
}

export default ItemCount

import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)


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


    const OnAdd=()=>{
        onAdd(count)
        console.log("Se han agregado " + count + " productos al carrito.")
    }
    

    return (
        <>
    <label className= "numeroContador"> {count} </label>
            <div className= "botones">    
            <Button className= "botonContador" onClick = {restar}>-</Button>
            <Button className= "botonContador" onClick = {OnAdd}>Agregar al carrito</Button>
            <Button className= "botonContador" onClick = {sumar}>+</Button>
            </div>
     </>
    )
}

export default ItemCount

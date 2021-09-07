import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './ItemCount.css'


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

    const agregarCarrito = () => {
        onAdd (count)
    }

    return (
        <>
    <Card  className= "cardProducto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0de.png" />
        <Card.Body className= "cardBody">
            <Card.Title>Coca cola Lata</Card.Title>
            <Card.Text>
            Coca cola en lata de 500ml
            </Card.Text>

       <label className= "numeroContador"> {count} </label>
            <br />
            <div className= "botones"> 
            <Button className= "botonContador" variant="primary" onClick = {restar}>-</Button>
            <Button className= "botonContador" variant="primary" onClick = {agregarCarrito}>Agregar al carrito</Button>
            <Button className= "botonContador" variant="primary" onClick = {sumar}>+</Button>
            </div>
        </Card.Body>
    </Card>
    
     </>
    )
}

export default ItemCount

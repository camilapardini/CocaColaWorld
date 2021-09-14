import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import ItemCount from "./ItemCount"
import { useState } from 'react'
import "./Item.css"


 function Item(props){
    
        
     return(
         <>

    <Card  className= "cardProducto" style={{ width: '22rem' }}>
            <Card.Img variant="top" src= {props.pictureUrl} className= "imagenProducto" />
        <Card.Body className= "cardBody">
            <Card.Title className="tituloCard">{props.title}</Card.Title>
            </Card.Body>
            <Button className= "botonContador" > Detalles</Button>
            {/* <ItemCount stock={20} initial={1} onAdd = {setItems} />   */}
    </Card> 
  
  
        </>
    )
}

export default Item 
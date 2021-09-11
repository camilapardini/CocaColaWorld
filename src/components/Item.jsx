import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"
import { useState } from 'react'
import "./Item.css"

 function Item(props){
    

     const [items, setItems] = useState(0)
        
     return(
         <>

    <Card  className= "cardProducto" style={{ width: '22rem' }}>
            <Card.Img variant="top" src= {props.pictureUrl} />
        <Card.Body className= "cardBody">
            <Card.Title className="tituloCard">{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            </Card.Body>
            <ItemCount stock={20} initial={1} onAdd = {setItems} />  
    </Card> 
  
  
        </>
    )
}

export default Item 
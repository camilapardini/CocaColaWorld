import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import "./Item.css"
import { Link } from "react-router-dom";


 function Item(props){
    
    return(
         <>
            <Card  className= "cardProducto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {props.pictureUrl} className= "imagenProducto" />
                <Card.Body className= "cardBody">
                    <Card.Title className="tituloCard">{props.title}</Card.Title>
                    </Card.Body>
                    <Link to= {`/detalle/${props.id}`} >
                    <Button className= "botonContador" > Detalles</Button>
                    </Link>
            </Card> 
        </>
    )
}

export default Item 
import "./ItemDetail.css"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from "../Context/cartContext"


function ItemDetail( {producto={}} ) {
  
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const {cartList, addToCart} = useCartContext ()


    const onAdd = (count) =>{
        setCambiarBoton (false)
        addToCart ({producto: producto, quantity:count})
    }


    return (
        <div className = "itemDetail">
        <div className ="contenedorCard">  
        <div className="cardImagen">
                 <img  src={producto.pictureUrl} className="cardImg" alt= "imagen producto" />
            </div>
        <div className='cardDetalle'>
        <h1>{producto.title}</h1>
         <p>{producto.description}</p>
         <hr />
            
            <div className="cardBody">
                <h3>Ingredientes</h3>
                <p>{producto.ingredientes}</p>
            
                <div className= "cardFooter">

                    

                <label className="precioProducto">${producto.price}</label>
                { cambiarBoton ?
        
                <ItemCount stock={producto.stock} initial={1} onAdd = {onAdd} />
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
            </div>   
        </div>
        </div>
        </div>
    )
}

export default ItemDetail
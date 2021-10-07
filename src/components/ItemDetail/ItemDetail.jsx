import "./ItemDetail.css"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from "../Context/cartContext"


function ItemDetail( {producto={}} ) {
  

    const [cantSeleccionada, setCantSeleccionada] = useState(0)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    

    const {cartList, addToCart} = useCartContext ()


    const onAdd = (count) =>{
        console.log("Se han agregado " + count + " productos al carrito")
        setCambiarBoton (false)
        addToCart ({producto: producto, quantity:count})
    }
    

    return (
        <div className = "itemDetail">
        <div className ="contenedorCard">  
         <h1>{producto.title}</h1>
         <p>{producto.description}</p>
         <hr />
        <div className='cardDetalle'>
            <div className="cardImagen">
                 <img  src={producto.pictureUrl} className="cardImg" alt= "imagen producto" />
            </div>
            <div className="cardBody">
                <h3>Ingredientes</h3>
                <p>{producto.ingredientes}</p>
                <h3>Valor Nutricional por porción (100ml)</h3>
                <ul>
                    <li>Calorías 180kJ/42 kcal</li>
                    <li>Grasas totales 0%</li>
                    <li>Proteínas 0%</li>
                    <li>Cafeína 10%</li>
                </ul>
                <label className="precioProducto">${producto.price}</label>
                <div className= "cardFooter">

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
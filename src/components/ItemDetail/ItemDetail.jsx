import "./ItemDetail.css"
import { useState } from "react"
import ItemCount from "../ItemCount"

function ItemDetail( props ) {
    const {producto} = props
    const [items, setItems] = useState(0)

    return (
        <div className = "itemDetail">
        <div className ="contenedorCard">  
         <h1>{producto.title}</h1>
         <p>{producto.description}</p>
         <hr />
        <div className='cardDetalle'>
            <div className="cardImagen">
                 <img  src={producto.pictureUrl} className="cardImg" />
            </div>
            <div className="cardBody">
                <h3>Ingredientes</h3>
                <p>Agua potable, azúcar, dióxido de carbono, aromas, ácido: ácido cítrico, regulador de acidez: gluconato de sodio, conservante: benzoato de sodio, estabilizantes: natrioctenil succinato de almidón y ésteres de glicerol de resina de madera, edulcorantes: edulcorantes: Se permite la precipitación.</p>
                <h3>Valor Nutricional por porción (100ml)</h3>
                <ul>
                    <li>Calorías 180kJ/42 kcal</li>
                    <li>Grasas totales 0%</li>
                    <li>Proteínas 0%</li>
                    <li>Cafeína 10%</li>
                </ul>
                <div className= "cardFooter">
                <p>${producto.price}</p>
                <ItemCount stock={20} initial={1} onAdd = {setItems} />
            </div>
            </div>
          
            
        </div>
        </div>
        </div>
    )
}

export default ItemDetail

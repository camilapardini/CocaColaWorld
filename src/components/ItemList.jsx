import { useState, useEffect } from 'react'
import { useParams } from  "react-router-dom";
import cocaUcrania from '../assets/img/cocaUcrania.png'
import cocaRusia from '../assets/img/cocaRusia.png'
import cocaAlemania from '../assets/img/cocaAlemania.png'
import cocaEspaña from '../assets/img/cocaEspaña.png'
import cocaKorea from '../assets/img/cocaKorea.png'
import cocaJapon from '../assets/img/cocaJapon.png'
import Cargando from './Spinner'
import Item from './Item'
import './ItemList.css'

const productos = [
    {   id: 1,
        categoria: "latas",
        title: 'Coca-Cola Ucrania',
        description: 'Disfrutá de su exótico sabor naranja y refrescá tus días',
        price: 200,
        pictureUrl: cocaUcrania,
        ingredientes: "Agua potable, azúcar, dióxido de carbono, aromas, ácido: ácido cítrico, regulador de acidez: gluconato de sodio, conservante: benzoato de sodio, estabilizantes: natrioctenil succinato de almidón y ésteres de glicerol de resina de madera, edulcorantes: edulcorantes: Se permite la precipitación."
     },
     {
        id: 2,
        categoria: "saborizadas",
        title: 'Coca-Cola Rusia',
        description: 'Un cítrico en versión Coca Cola. Refrescante gusto a lima',
        price: 150,
        pictureUrl: cocaRusia,
        ingredientes: "Agua purificada, azúcar, zumo de lima 0,5%, colorante de azúcar IV, aromas naturales, reguladores de acidez (ácido fosfórico, citratos de sodio), cafeína (menos de 150 mg / l), conservante benzonato de sodio."
     },
     {
        id: 3,
        categoria: "saborizadas",
        title: 'Coca-Cola Alemania',
        description: 'Sabor vainilla para que consigas ese dulzor que esperabas',
        price: 250,
        pictureUrl: cocaAlemania,
        ingredientes: "Agua, azúcar, ácido carbónico, colorante E 150d, aroma, acidulante ácido fosfórico, aroma cafeína."
     },
     {
        id: 4,
        categoria: "botellas",
        title: 'Coca-Cola España',
        description: 'Edición especial de la Coca Cola sabor original, esta vez más refrescante que nunca',
        price: 200,
        pictureUrl: cocaEspaña,
        ingredientes: "Coca‑Cola con notas de lima, jengibre, jazmín de romero y jalapeño, el mixer exclusivo de Coca‑Cola Signature Mixers Spicy Notes aporta calor adicional."
     },
     {
        id: 5,
        categoria: "latas",
        title: 'Coca-Cola Korea',
        description: 'Coca Cola frozen para tomar en tus veranos. Directo del freezer a tu mesa!',
        price: 100,
        pictureUrl: cocaKorea,
        ingredientes: "Coca-Cola sabor original con un agregado aroma a limón. Agua, azúcar, ácido carbónico, colorante E 150d, aroma, acidulante ácido fosfórico."
     },
     {
        id: 6,
        categoria: "botellas",
        title: 'Coca-Cola Japon',
        description: 'La Coca Cola Plus te otorgará un plus de energía ya que contiene energizante.',
        price: 150,
        pictureUrl: cocaJapon,
        ingredientes: "Fibra dietética (dextrina no digerible) / ácido carbónico, pigmento de caramelo, acidulante, edulcorante (compuesto de aspartamo / L-fenilalanina, acesulfamo K, sucralosa), aroma, cafeína."
     }
  ];


export const getProductos = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve(productos)
        },2000) 
})


function ItemList () { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams ()

    

    useEffect(() => {

        if  (idCategoria){ 
            getProductos
            .then(respuesta =>{
                setProductos(respuesta.filter(prod => prod.categoria === idCategoria) )         
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }else {
            getProductos
        .then(respuesta =>{
            setProductos(respuesta)         
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
        }      
        
    }, [idCategoria])
    
 
    return (
        <>             

            { loading ? <Cargando /> : <div className="conjuntoCards">
            {productos.map((producto) => <Item {...producto}/>)}
           
        </div> }  
          
        </>
    )
}

export default ItemList

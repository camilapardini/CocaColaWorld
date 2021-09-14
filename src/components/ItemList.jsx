import { useState, useEffect } from 'react'
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
        title: 'Coca-Cola Ucrania',
        description: 'Disfrutá de su exótico sabor naranja y refrescá tus días',
        price: 200,
        pictureUrl: cocaUcrania
     },
     {
        id: 2,
        title: 'Coca-Cola Rusia',
        description: 'Un cítrico en versión Coca Cola. Refrescante gusto a lima',
        price: 150,
        pictureUrl: cocaRusia
        
     },
     {
        id: 3,
        title: 'Coca-Cola Alemania',
        description: 'Sabor vainilla para que consigas ese dulzor que esperabas',
        price: 250,
        pictureUrl: cocaAlemania
     },
     {
        id: 4,
        title: 'Coca-Cola España',
        description: 'Edición especial de la Coca Cola sabor original, esta vez más refrescante que nunca',
        price: 200,
        pictureUrl: cocaEspaña
     },
     {
        id: 5,
        title: 'Coca-Cola Korea',
        description: 'Coca Cola frozen para tomar en tus veranos. Directo del freezer a tu mesa!',
        price: 100,
        pictureUrl: cocaKorea
     },
     {
        id: 6,
        title: 'Coca-Cola Japon',
        description: 'La Coca Cola Plus te otorgará un plus de energía ya que contiene energizante',
        price: 150,
        pictureUrl: cocaJapon
     }
  ];


const getProductos = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve(productos)
        },2000) 
})


function ItemList () { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        getProductos
        .then(respuesta =>{
            setProductos(respuesta)         
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
               
        
    }, [])
    

    return (
        <>             

            { loading ? <Cargando /> : <div className="conjuntoCards">
            {productos.map((producto) => <Item {...producto}/>)}
           
        </div> }  

        
          
        </>
    )
}

export default ItemList

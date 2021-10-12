import { useState, useEffect } from 'react'
import { useParams } from  "react-router-dom";
import Cargando from '../Spinner/Spinner'
import Item from '../Item/Item'
import './ItemList.css'
import { getFirestore } from '../../services/getFirebase';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom"

function ItemList () { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams ()


    useEffect(() => {

        const dbQuery = getFirestore()
        const nuevaColeccion = idCategoria ?
                                    dbQuery.collection("productos").where("categoria", "==", idCategoria)
                                    :
                                    dbQuery.collection("productos")

        nuevaColeccion.get()
        .then(resp => {
            setProductos (resp.docs.map(producto => ({id : producto.id, ...producto.data() }  ) ) )
        })
        .catch(err =>console.log(err))
        .finally(()=> setLoading(false))

    }, [idCategoria, setLoading])


    
    return (
        <>             
            { loading ? <Cargando /> : 
            <>
            <Carousel>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src= "https://i.ibb.co/48Ck5rG/carousel3ajustada.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/KFSjTpQ/carousel2ajustada.jpg"
                alt="Second slide"
            
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/5ndjqbD/carousel1ajustada.jpg"
                alt="Third slide"
        
              />
        
            </Carousel.Item>
          </Carousel>

          <div id= "nosotros"> 
              <h2>Sobre Nosotros</h2>
              <p>En mayo de 1866, John Pemberton sirvió en Atlanta la primera Coca-Cola. Desde esa bebida icónica hasta hoy hemos recorrido un largo camino: el que nos llevó a convertirnos en una Compañía Integral de Bebidas. Somos Coca-Cola y mucho más…
                Reunimos las coca-cola más exóticas de distintos países para que puedas conocerlas y disfrutarlas.
              </p>
          
          </div> 
          
          
          <div className= "conjuntoIconos">
           
            <div>
                <Link to="/">
                    <img src=" https://i.ibb.co/NnzVftT/bebidas.png" alt= "imagen icono 1"
                    style= {{width: "80px", margin: "1rem"}} className="hvr-grow"/>
                    <p className= "categoriaIconos">Todo</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/botellas">
                    <img src=" https://i.ibb.co/TMm1xmn/bottle.png" alt= "imagen icono 2"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Botellas</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/latas">
                    <img src="https://i.ibb.co/ccx5CJ1/lata-de-cerveza.png" alt= "imagen icono 3"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Latas</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/saborizadas">
                    <img src="https://i.ibb.co/Rjbywtb/soda.png" alt= "imagen icono 4"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Saborizadas</p>
                </Link>
                </div>
            </div>

            <div className="conjuntoCards">
            {productos.map((producto) => <Item {...producto}/>)}
           
        </div> 
        
        </>
        }  
    </>
    )
}

export default ItemList

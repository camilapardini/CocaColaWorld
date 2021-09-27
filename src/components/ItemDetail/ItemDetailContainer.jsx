import { useState, useEffect } from "react"
import { getProductos } from "../ItemList"
import ItemDetail from "./ItemDetail";
import { useParams } from  "react-router-dom";

const ItemDetailContainer = () => {

    const [ producto, setProducto ] = useState()
    const [loading, setLoading] = useState(true)

    const { id } = useParams ();

    useEffect(() => {
    
        getProductos
       
            .then((respuesta) =>{
                 if  (id){ 
                const productoFiltrado = respuesta.filter((prod) => prod.id === parseInt(id))
                setProducto (productoFiltrado)         
            }else {
      
            setProducto(respuesta)         
        }
        
        })
        .catch((error) => console.log(error))
        
              
        
    }, [id])


    return (
        <>
            {producto && <ItemDetail key={ producto [0].id} producto={producto[0]} />}
            
        </>
    )
}

export default ItemDetailContainer

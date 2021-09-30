import { useState, useEffect } from 'react'
import { useParams } from  "react-router-dom";
import Cargando from './Spinner'
import Item from './Item'
import './ItemList.css'
import { getFirestore } from '../services/getFirebase';


function ItemList () { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams ()

    

    useEffect(() => {

        if(idCategoria ){
        const dbQuery = getFirestore()
        dbQuery.collection("productos").where("categoria", "==", idCategoria).get()
        .then(resp => {
            setProductos ( resp.docs.map(producto => ({id : producto.id, ...producto.data() }  ) ) )
        })
        .catch(err =>console.log(err))
        .finally(()=> setLoading(false))
        
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection("productos").get()
            .then(resp => {
                setProductos ( resp.docs.map(producto => ({id : producto.id, ...producto.data() }  ) ) )
            })
            .catch(err =>console.log(err))
            .finally(()=> setLoading(false))
        } 
        
    }, [idCategoria, setLoading])
    
    
    return (
        <>             

            { loading ? <Cargando /> : <div className="conjuntoCards">
            {productos.map((producto) => <Item {...producto}/>)}
           
        </div> }  
          
        </>
    )
}

export default ItemList

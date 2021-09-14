import { useState, useEffect } from "react"
import { getUnProducto } from "./promise"
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [ producto, setProducto ] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
       getUnProducto
       .then(resp => {
           setProducto(resp)
           setloading(false)
       }) 
    }, [])

    return (
        <>
            {loading ? 
                    <div></div> 
                : 
                    <ItemDetail producto={producto} />
            }
            
        </>
    )
}

export default ItemDetailContainer

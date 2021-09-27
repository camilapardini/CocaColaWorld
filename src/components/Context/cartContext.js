import { useState, createContext, useContext } from "react";


const cartContext = createContext ([])

export const useCartContext = () => useContext (cartContext)


export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState ([])

    function addToCart (nuevoProducto) {
        

        const buscar = cartList.findIndex(producto => nuevoProducto.producto.id === producto.producto.id)
     
        if(buscar === -1){
            setCartList([...cartList,nuevoProducto])
        }else{
            const nuevaCantidad= cartList[buscar].quantity + nuevoProducto.quantity
           
            const oldList = cartList.filter(old=> old.producto.id !== nuevoProducto.producto.id)
            
            setCartList([...oldList,{producto: nuevoProducto.producto, quantity: nuevaCantidad}])
        }
    }


    const removeItem = (productoId) =>{
        return cartList.filter(producto => producto.producto.id !== productoId)
   
    }

    const price =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity* valor.producto.price)), 0) 
    }
    const size =()=>{
        return cartList.reduce((acum, valor)=> acum + valor.quantity, 0) 
    }

    const clearList = () => {
        setCartList ([])
    }

    return (
        <cartContext.Provider value= {{
            cartList,
            addToCart,
            removeItem,
            price,
            size,
            clearList
        }}>
            {children}
        </cartContext.Provider>
    )
}
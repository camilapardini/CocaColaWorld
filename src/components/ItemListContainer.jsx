import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
    const {greeting} = props

  const onAdd = (cant) =>{
    console.log("Se han agregado " + cant + " productos al carrito" );
  }

    return (
        <>
          <h2>{greeting}</h2>  
          <ItemCount stock = {20} initial = {1} onAdd = {onAdd} />
        </>
    )
}

export default ItemListContainer

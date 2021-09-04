import React from 'react'

function ItemListContainer(props) {
    const {greeting} = props
    return (
        <>
          <h2>{greeting}</h2>  
        </>
    )
}

export default ItemListContainer

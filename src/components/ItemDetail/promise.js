import cocaUcrania from "../../assets/img/cocaUcrania.png"

const unProducto = { id: 1, title: 'Coca-Cola Ucrania', description: 'Disfrutá de su exótico sabor naranja y refrescá tus días', price: 200, pictureUrl: cocaUcrania}

export const getUnProducto = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(unProducto)        
    }, 2000);
})



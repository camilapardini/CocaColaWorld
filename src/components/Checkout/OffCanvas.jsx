import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2'
import { getFirestore } from '../../services/getFirebase';
import  firebase  from 'firebase'
import 'firebase/firestore'
import { useCartContext } from "../Context/cartContext"
import "./Checkout.css"

function Checkout({ name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {cartList, cantidadTotal, clearList,  precioTotal} = useCartContext ()

    const [ formData, setFormData ] = useState({
        name: "",
        tel: "",
        email: "",
    })

    const handleOnSubmit = (e) =>{        
        e.preventDefault() 

        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date() );
        orden.buyer = formData
        orden.total = precioTotal();
        orden.cantidad = cantidadTotal(); 
        
        orden.items = cartList.map(cartProducto => {
            const id = cartProducto.producto.id;
            const title = cartProducto.producto.title;
            const price = cartProducto.producto.price * cartProducto.quantity;
            
            return {id, title, price}   
        })


        const db = getFirestore()

        if (formData.email === formData.emailConf) {
        db.collection('ordenes').add(orden)
        .then(resp => Swal.fire(
            '¡Compra Exitosa!',
            "Tu número de orden es " + (resp.id),
            'success'
          ))
        .catch(err=> console.log(err))
        .finally(()=> {
            setFormData({
                name: '',
                tel: '',
                email: ''
            }) 
             clearList()}
        )} else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Los mails ingresados deben coincidir',
                })
        }
       
        const productosToUpdate = db.collection('productos').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.producto.id)
        )
            
        const batch = db.batch();
        
        productosToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(producto => producto.producto.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
    }

    function handleOnChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
      <>
      <Button className="botonContador"  onClick={handleShow}>Terminar compra</Button>
        
        <Offcanvas show={show} onHide={handleClose} placement= "end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Checkout</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          <Form onSubmit={handleOnSubmit} onChange={handleOnChange}>
                <Form.Label>
                        Completá los siguientes datos para finalizar tu compra
                </Form.Label>
                <hr />
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Floating className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre y Apellido"
                            value={formData.name} 
                            name="name"
                            />
                        <Form.Label>Nombre Completo</Form.Label>
                    </Form.Floating>
                </Form.Group>

                <br />

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Floating className="mb-3">
                        <Form.Control 
                        required type="tel" 
                        placeholder="Telefono"
                        name="tel"  
                        value={formData.tel} 
                        />
                        <Form.Label>Telefono</Form.Label>
                    </Form.Floating>
                </Form.Group>    

                <Form.Group className="mb-3" controlId="email">
                    <Form.Floating className="mb-3">
                        <Form.Control 
                        required type="mail" 
                        placeholder="email"
                        name="email"  
                        value={formData.email} 
                        />
                        <Form.Label>Ingresa tu mail</Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailConf">
                    <Form.Floating className="mb-3">
                        <Form.Control 
                        required type="mail" 
                        placeholder="emailConf"
                        name="emailConf"  
                        value={formData.emailConf} 
                        />
                        <Form.Label>Repetí tu mail</Form.Label>
                    </Form.Floating>
                </Form.Group>
                
                
                <Button className= "botonContador" type="submit" >
                    ¡Finalizar Compra!
                </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
        
      </>
    );
}
  
  export default Checkout;

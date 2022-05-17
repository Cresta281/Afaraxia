import '../../styles/estilos.css'
import {useState, useContext, useEffect } from 'react'
import { Database } from '../../services/firebase'
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import {  Link } from 'react-router-dom'
import { toast } from 'react-toastify'
export const CartForm = () => {
    const [newName,setOrderName] = useState('')
    const [newEmail, setOrderEmail ] = useState('')
    const [newAdress, setOrderAdress ] = useState('')
    const [newInfo, setOrderInfo] = useState('')
    const { cartItems, getTotal, clearCart } = useContext(CartContext)
    
    
    
    
    const orderCollectionRef = collection(Database,'Orders')
    
    const newOrder = async () => {
        await addDoc(orderCollectionRef, { nombre: newName, email: newEmail, direccion: newAdress, info: newInfo, items: cartItems, total: getTotal() })
        .then(clearCart(cartItems)).then( toast.success('Se ha realizado su compra', {position: "top-right", autoClose: 2000}))
    }






    
  return (
    <form className="Form">
        <div className="FormWrapper">
            <h1>Complete con sus datos</h1>
            <div className="NameContainer">
                <input type="text" className="Name" placeholder="Nombre" onChange={(event) => {setOrderName(event.target.value)}}/>
            </div>
            <div className="DataContainer">
                <input type="email" className="email" placeholder="Email" onChange={(event) => {setOrderEmail(event.target.value)}} />
                <input type="text" className="email" placeholder="Punto de entrega" onChange={(event) => {setOrderAdress(event.target.value)}} />
            </div>
            <div className="AddedData">
                <textarea className="Text" placeholder="Informacion adicional que desee agregar" onChange={(event) => {setOrderInfo(event.target.value)}} />
                <button type='submit' className="Button" onClick={newOrder}><Link className="buttonLink" to='/'>Comprar</Link></button>
            </div>
        </div>
    </form>
  )
}

export default CartForm 

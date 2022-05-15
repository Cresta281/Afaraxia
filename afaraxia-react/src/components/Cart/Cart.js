import '../../styles/estilos.css'
import {  useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import  ItemCart from './ItemCart'

const Cart = () => {
    const { cartItems, getTotal } = useContext(CartContext)

  return (
    <div className="CartContainer">
        <h1 className="CartTitle">Tu carrito</h1>
        {cartItems.length === 0 ? <p className="CartTitle2">No tienes nada en tu carrito</p> : 
            <div className="Cart">
                {cartItems.map((item,i) => (
                    <ItemCart key={i} item={item} />
                ))}
            </div>
            
        }
        <h2 className="CartTitle3"> Total: ${getTotal(cartItems)}</h2>
    </div>
  )
}

export default Cart
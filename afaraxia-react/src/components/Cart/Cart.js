import '../../styles/estilos.css'
import {  useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import  ItemCart from './ItemCart'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartItems, getTotal } = useContext(CartContext)
  return (
    <div className="CartContainer">
        <h1 className="CartTitle">Tu carrito</h1>
        <div className="CartItemContainer">
            {cartItems.length === 0 ? <p className="CartTitle2">No tienes nada en tu carrito</p> : 
                <div className="Cart">
                    {cartItems.map((item,i) => (
                        <ItemCart key={i} item={item} />
                    ))}
                </div>
                
            }
        </div>
        <h2 className="CartTitle3"> Total: ${getTotal(cartItems)}</h2>
        <Link to="/form" className="CartLinks"><button className="CartButton">Finalizar compra</button> </Link> 
    </div>
  )
}

export default Cart
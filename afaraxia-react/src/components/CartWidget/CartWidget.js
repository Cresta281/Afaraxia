import '../../styles/estilos.css'
import { useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


const CartWidget = () => {
    const [productsLength, setProductsLength] = useState(0)
    const { cartItems } = useContext(CartContext)

    useEffect(()=> {
        setProductsLength(cartItems.reduce((previous, current) => previous + current.amount, 0))
    }, [cartItems])
    
    

    return (
        <div className="CartDiv">
            <div className="Cart">
                <i className="fa-solid fa-cart-shopping" onClick={<Link to='/cart'/>}>{productsLength}</i>
            </div>
        </div>
    )
}

export default CartWidget  
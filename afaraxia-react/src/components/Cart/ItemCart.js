import '../../styles/estilos.css'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'


const ItemCart = ({item}) => {
    const { deleteItemToCart, addItemToCart } = useContext(CartContext)
 
  return (
    <div className="ItemCartContainer">
         <div className="ItemCartInfo">
            <p className="ItemData">{item.title}</p>
            <p className="ItemData">{item.price}</p>
            <p className="ItemData">{item.amount}</p>
        </div>
        <div className="ItemCartMinus">
            <i className="fa-solid fa-minus" onClick={()=> deleteItemToCart(item)} ></i>
        </div>
        <div className="ItemCartPlus" onClick={()=> addItemToCart(item)}>
            <i className="fa-solid fa-plus"></i>
        </div>
        
    </div>
  )
}

export default ItemCart
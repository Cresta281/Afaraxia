import '../../styles/estilos.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
const ProductsItem = ({item}) => {
    const {addItemToCart} = useContext(CartContext)
  return (
    <div className="itemContainer">
        <h1 className="itemName">{item.title}</h1>
        <img src={item.img} className="productsImg" />
        <div className="productsInfo">
            <div className="iconsContainer">
                <i className="fa-solid fa-cart-shopping" onClick={()=> addItemToCart(item)}> </i>
            </div>
            <div className="iconsContainer">
                <i className="fa-solid fa-circle-info"></i>
            </div>
        </div>
    </div>
  )
}

export default ProductsItem
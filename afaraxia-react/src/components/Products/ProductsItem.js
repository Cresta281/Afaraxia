import '../../styles/estilos.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect} from 'react'
import { CartContext } from '../../Context/CartContext'


const ProductsItem = ({products}) => {
    const navigate = useNavigate()
    const {addItemToCart, cartItems} = useContext(CartContext)
    const [stock, setStock] = useState([products.stock])

    const reducirStock = () => {
        const reduceStock = stock - products.amount
        setStock(reduceStock)
        
    }
    useEffect(()=> {
        localStorage.setItem('productsStock',JSON.stringify(stock))
        console.log(stock)
    },[stock])

    const addReduce = (props) => {
       reducirStock(props)
        addItemToCart(props)
    }
    


    return (
    <div className="itemContainer">
        <h1 className="itemName">{products.title}</h1>
        <img src={products.img} className="productsImg" />
        <div className="productsInfo">
            <div className="iconsContainer">
                <i className="fa-solid fa-cart-shopping" onClick={stock > 0 ? ()=> addReduce(products) : null}> </i>
            </div>
            <div className="iconsContainer">
                <i className="fa-solid fa-circle-info" onClick={()=> {navigate(`/product/${products.title}`)}}></i>
            </div>
        </div>
        <div className="stockContainer">
        <p>{stock > 0 ? `Stock: ${stock}` : <p className="noStock">No disponible</p>}</p>
        <p>${products.price}</p>
        </div>
    </div>
  )
}

export default ProductsItem
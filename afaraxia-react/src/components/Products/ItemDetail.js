import '../../styles/estilos.css'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import {  useContext, useState, useEffect } from 'react'
import { Database } from '../../services/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
const ItemDetail = () => {
  const  [details, setDetails] = useState([])
  const {itemId} = useParams()
  useEffect(() => {

    const detailsRef = itemId 
        ? query(collection(Database, 'ProductsData'), where('title', '==', itemId))
        : collection(Database, 'products')

    getDocs(detailsRef)
        .then(response => {
            const detail = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setDetails(detail)
        })
        .catch(error => {
            console.log(error)
        })
}, [itemId]) 

    const { addItemToCart } = useContext(CartContext)
    
    return (
        <div className="DetailContainer">
          {details.map((detail) => {
            return <div className="DetailContainer">
            <h1 className="DetailTitle">{detail.title}</h1>
            <div className="DetailImgContainer">
              <img className="DetailImg" src={detail.img}></img>
            </div>
            <p className="DetailDescription">{detail.description}</p>
            <div className="DetailInfo">
              <p>${detail.price}</p>
              <p>Stock disponible: {detail.stock}</p>
            </div>
            <div className="DetailInfo">
              <button className="DetailButton" onClick={()=> addItemToCart(detail)}>Agregar al carrito</button>
              <Link to={'/product'} className="DetailButton">Volver</Link>
            </div>
          </div>
          })}
        </div>
    )
}

export default ItemDetail
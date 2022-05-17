import '../../styles/estilos.css'
import ProductsItem from './ProductsItem'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Database } from '../../services/firebase/index'
import { getDocs, collection, query, where } from 'firebase/firestore'
const ProductsFiltered = () => {
  const { category } = useContext(CartContext)
  const [products, setProducts] = useState([])
  useEffect(() => {


    const dbRef = category == 'Bonsai' || 'Suculenta'
        ? query(collection(Database, 'ProductsData'), where('category', '==', category))
        : collection(Database, 'ProductsData')

    getDocs(dbRef)
        .then(call => {
            const productos = call.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(productos)
        })
        .catch(error => {
            console.log(error)
        })
  }, []) 
  
  return (
    <div className="productsContainer">
         {products.map((products) => {
          return <ProductsItem products={products} key={products.id}/>
        })}
        
        
    </div>
  )
}

export default ProductsFiltered
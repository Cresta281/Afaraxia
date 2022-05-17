import '../../styles/estilos.css'
import ProductsItem from './ProductsItem'
import {  useState, useEffect } from 'react'
import { Database } from '../../services/firebase/index'
import { getDocs, collection, query, where } from 'firebase/firestore'
const Products = () => {
  const [products, setProducts] = useState([])
  const productsRef = collection(Database,'ProductsData')
  useEffect(()=> {
    const getProducts = async () => {
      const data = await getDocs(productsRef)
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProducts()
  }, [])
  return (
    <div className="productsContainer">
         {products.map((products) => {
          return <ProductsItem products={products} key={products.id}/>
        })}
        
        
    </div>
  )
}

export default Products
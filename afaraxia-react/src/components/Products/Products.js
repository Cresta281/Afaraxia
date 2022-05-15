import '../../styles/estilos.css'
import { Productos } from '../../data/productsData'
import ProductsItem from './ProductsItem'
import { useState } from 'react'; 

const Products = () => {
  return (
    <div className="productsContainer">
        {Productos.map((item) =>(
            <ProductsItem item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Products
import '../../styles/estilos.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CategoryItem = ({categorias}) => {
  const { selectCategory } = useContext(CartContext)

  return (
    <div className="categoryItemContainer">
        <img className="categoryImage" src={categorias.img} alt={categorias.alt} />
        <div className="categoryInfo">
            <h1 className="categoryTitle">{categorias.title}</h1>
            <button className="categoryButton" onClick={()=> selectCategory(categorias.category)}><Link className="categoryLink" to={'/product/filter'}>Ir</Link></button>
        </div>
    </div>
  )
}

export default CategoryItem
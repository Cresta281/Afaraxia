import '../../styles/estilos.css';
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className="categoryItemContainer">
        <img className="categoryImage" src={item.img} alt={item.alt} />
        <div className="categoryInfo">
            <h1 className="categoryTitle">{item.title}</h1>
            <button className="categoryButton">Comprar</button>
        </div>
    </div>
  )
}

export default CategoryItem
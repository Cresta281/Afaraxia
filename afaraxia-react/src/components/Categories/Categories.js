import categories from '../../data/categoriesData';
import '../../styles/estilos.css';
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="categoriesContainer">
        {categories.map(item => (
            <CategoryItem  item={item} key={item.id} />
        ))}

    </div>
  )
}

export default Categories
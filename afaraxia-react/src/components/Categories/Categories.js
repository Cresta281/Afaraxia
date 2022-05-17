import '../../styles/estilos.css';
import CategoryItem from './CategoryItem'
import { Database } from '../../services/firebase'
import { collection, getDocs, } from 'firebase/firestore'
import { useState, useEffect } from 'react'
const Categories = () => {
 const  [categorias, setCategories] = useState([])
 const categoriesRef = collection(Database,'categories')
  useEffect(()=> {
    const getCategories = async () => {
      const data = await getDocs(categoriesRef)
      setCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getCategories()
  }, [])
  return (
    <div className="categoriesContainer">
        {categorias.map((categorias) => {
          return <CategoryItem categorias={categorias} key={categorias.id}/>
        })}

    </div>
  )
}

export default Categories
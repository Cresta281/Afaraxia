import '../../styles/estilos.css'
import img1 from '../../images/background_home.jpg'
import { Link } from 'react-router-dom'
const Contacto = () => {
  return (
    <div className="ContactoContainer">
        <div className="ContactoWrapper">
            <img className="ContactoImage" src={img1}></img>
            <h1>¿Quienes somos?</h1>
            <p>Venimos a revolucionar la industria verde, trayendo y movilizando los hogares de cada cliente</p>
        </div>
        <div className="ContactoInfo">
            <div className="SeedCard">
                <Link to='/'><i className="fa-solid fa-seedling"></i></Link>
            </div>
            <div className="InfoCard">
                <p>Nuestra base se fundamenta en traer amor hacia los productos que van a decorar tu jardin u hogar.</p>
                <p>Tenemos certezas y convicciones que nos llevan a afirmar que nuestros productos transmiten la energia</p>
                <p>que mueve tu<span>PRODUCTIVIDAD</span></p>
            </div>
            <div className="SeedCard">
                <Link to='/'><i className="fa-solid fa-seedling"></i></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Contacto
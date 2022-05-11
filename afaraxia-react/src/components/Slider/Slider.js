import '../../styles/estilos.css';


const Slider = () => {
  return (
    <div className="sliderContainer">
        <div className="arrowContainer">
            <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="wrapper">
            <div className="imageContainer"><img src= '(https://www.pexels.com/es-es/foto/cinco-cactus-de-varios-colores-311458/)' alt="muchos cactus"/></div>
            <div className="infoContainer"></div>
        </div>
        <div className="arrowContainer2">
            <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Slider
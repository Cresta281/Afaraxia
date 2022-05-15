import '../../styles/estilos.css';
import SliderData from '../../data/sliderData';
import { useState } from 'react'


const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0)

  const handleWrap = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }



  return (
    <div className="sliderContainer">
        <div className="arrowContainer" onClick={()=>handleWrap('left')}>
            <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className={slideIndex === 1 ? "wrapper1" : slideIndex === 2 ? "wrapper2" : "wrapper"}>
            {SliderData.map((data)=>(
              <div className="slide">
                <div className="imageContainer">
                  <img src={data.img} alt={data.alt}/></div>
                <div className="infoContainer">
                  <h1 className="title"> {data.title}</h1>
                  <p className= "description">{data.description}</p>
                  <button className="buttonSlider">Descubrir</button>
                </div>
              </div>
            ))}
        </div>
        <div className="arrowContainer2" onClick={()=>handleWrap('right')}>
            <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Slider
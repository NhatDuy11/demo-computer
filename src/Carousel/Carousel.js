// 
import React from 'react'
import hinh2 from "../img/hinh2.png"
import banner3 from "../img/banner3.png"
import banner4 from "../img/banner4.png"
import "./Carousel.css"



export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hinh2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/bd/98/35/bd983558d61361e66f41c5b9c622ea99.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>


    </div>
  )
}

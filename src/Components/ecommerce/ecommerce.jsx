import React from "react";
import "./ecommerce.css";
import testImage from "../../images/logo.png"
export default function Ecommerce() {
  return <div style={{margin:"18vh auto"}}>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={testImage} className="d-block w-100" alt={testImage}/>
    </div>
    <div className="carousel-item">
      <img src={testImage} className="d-block w-100" alt={testImage}/>
    </div>
    <div className="carousel-item">
      <img src={testImage} className="d-block w-100" alt={testImage}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
}

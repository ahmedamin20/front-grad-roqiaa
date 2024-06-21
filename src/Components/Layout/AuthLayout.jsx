import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import navImg from "../../images/logo.png";
import "./AuthLayout.css"
export default function AuthLayout() {
  return (
    <>
    <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
  <img src={navImg} alt="logo" className="w-25 logoo my-2"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body ">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item"> 
            <a className="nav-link active" href="/Home" aria-current="page" >Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Ecommerce">Ecommerce</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/Home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a href="/Search" className="dropdown-item" >Search</a></li>
              <li><a  href="/Results" className="dropdown-item" >Results</a></li>
              <li>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
        <Outlet />
    <Footer />
    </>
  );
}

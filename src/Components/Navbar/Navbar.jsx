import React from "react";
import './nav.css'
import '../../App.css'
import navImg from "../../images/logo.png";
export default function Navbar(){
return <>

<nav className="nav fixed-top">
          <div className="container-md d-flex justify-content-between align-items-center">
               <div className="w-25">
                    <img src={navImg} alt="logo" className="w-25 my-2"/>
               </div>
               <div>
                    <ul className="d-flex p-0 m-0">
                         <li className="d-flex align-items-center main-color mx-4">
                              <i className="fa-solid fa-user-plus fs-5"></i>
                              <a href="/Register" className="fs-4 sans-serif ps-2">Register</a>
                         </li>
                         <li className="d-flex align-items-center main-color mx-4">
                              <i className="fa-solid fa-unlock fs-5"></i>
                              <a href="/Login" className="fs-4 sans-serif ps-2">Sign in</a>
                         </li>
                         <li className="d-flex align-items-center main-color mx-4">
                              <i className="fa-solid fa-users fs-5"></i>
                              <a className="fs-4 sans-serif ps-2">Visitor</a>
                         </li>
                    </ul>
               </div>
          </div>
     </nav>
    </>
}
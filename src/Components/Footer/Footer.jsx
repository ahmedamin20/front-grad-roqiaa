import React from "react";
import './footer.css'
import '../../App.css'


export function Footer(){
     return <>
       <footer className="footer pb-2 d-flex justify-content-center align-items-center">
               <p className="m-0 san-serif fw-medium fs-4"><span className="fw-bold">Comfy View ,</span> Download on <a href="#" className="main-color">App Store</a> and <a className="main-color">Google Play</a>.</p>
          </footer>
     </>
}
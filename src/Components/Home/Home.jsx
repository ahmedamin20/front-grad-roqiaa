import React from "react";
import Image1 from "../../images/2672335.jpg";
import Image2 from "../../images/pic2.png";
import "./home.css";
import "../../App.css";
export function Home() {
  return (
    <>
      <section className="home">
        <div className="empty-space"></div>
        <div className="container-lg">
          <div className="w-85 mx-auto pt-2">
            <h4 className="text-center fw-normal roboto py-2">
              <span className="fw-medium fs-2">Welcome, </span>We are here to
              assist you.
            </h4>
            <div className="d-flex justify-content-start align-items-end">
              <img src={Image1} alt="people" className="w-28 me-5" />
              <a className="koho fs-3 fw-medium main-color ps-5">
                Know more About us.
              </a>
            </div>
          </div>
          <hr></hr>
          <div className="w-85 mx-auto d-flex justify-content-between align-items-center">
            <div className="">
              <div>
                <p className="fw-medium space-grotesk fs-3 m-0">
                  We're <span className="fw-normal">here</span> to help.
                </p>
                <p className="koho fw-medium roboto fs-4">
                  Didn't find what you were looking for?
                </p>
              </div>
              <div>
                <ul className="main-color pt-2">
                  <li className="d-flex align-items-center main-color mx-4 pb-1">
                    <i className="fa-brands fa-twitter fs-3"></i>
                    <a className="fs-4 exo ps-2">
                      Twitter
                    </a>
                  </li>
                  <li className="d-flex align-items-center main-color mx-4">
                    <i className="fa-brands fa-facebook fs-3"></i>
                    <a  className="fs-4 exo ps-2">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-40">
              <img src={Image2} alt="man" className="w-75" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

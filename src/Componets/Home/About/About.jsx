import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="container mt-4" id="aboutt"> 
        <div className="row">
          <p className=" text-center">About Us</p>
          <h1 className=" text-center about-fw">
            Learn More <span className="about-fs"> About Us </span>
          </h1>
          <div className="col-lg-7">
            <div>
              <img
                className=" w-100"
                src="https://themewagon.github.io/yummy-red/assets/img/about.jpg"
                alt=""
              />
            </div>
            <div className="book-a-table text-center mt-5">
              <h3 className=" fw-bold">Book a Table</h3>
              <p className=" text-danger fs-2 fw-bold">+91 7622941002</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className=" ps-0 ps-lg-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <img
                className=" w-100"
                src="https://themewagon.github.io/yummy-red/assets/img/about-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

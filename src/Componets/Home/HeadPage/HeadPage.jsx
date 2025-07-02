import React from "react";
import "./HeadPage.css";
import { Link } from "react-router-dom";
const HeadPage = () => {
  return (
    <>
      <div className="container-fluid  first-bkd">
        <div className="row d-flex justify-content-around">
          <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center">
            <div>
              <h1 className="hea-heading animated">
                Enjoy Your <span className="h-font"> Healthy</span> <br />
                Delicious <span className="about-fs"> Food</span>
              </h1>
              <p>online food delivery available now</p>
              <div>
                <a href="#check-cravings">
                  {" "}
                  <button className="Book-t">Check out our Cravings</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 w-50 dis-adjust-head">
            <img className=" menu-sty w-100"
              src="https://themewagon.github.io/yummy-red/assets/img/hero-img.png"
              alt=""
            />
            {/* https://themewagon.github.io/yummy-red/assets/img/hero-img.png */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadPage;

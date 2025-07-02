import React from "react";
import "./SectionNo2.css";
import { Link } from "react-router-dom";

const SectionNo2 = () => {
  return (
    <>
      <div class=" container-fluid  mt-5  all-listt" id="check-cravings">
        <h1 className=" text-center inspiration  mt-3 mb-4">
          Inspiration for your first order
        </h1>
        <h4 className=" text-center inspiration mt-3 mb-4">
          Check out our Cravings
        </h4>
        <marquee behavior="" direction="" loop="">
          <div className=" row ajust-containn">
            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link  to="/Northindian">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/1:1/w_3349,h_3350,c_limit/GettyImages-1223580360.jpg"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">North indian</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Sandwich at a time.
                    <br />
                    View all Northindian
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Thali">
                <div className="rolls">
                  <img
                    className="panelll-h w-100"
                    src="https://tgkrestaurant.com/wp-content/uploads/2025/01/gujaratithali.png"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Thali</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Thali at a time.
                    <br />
                    View all Thali
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Rolls">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://www.chatpataaffair.com/wp-content/uploads/2023/05/veg-roll.jpg2_.jpg"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Rolls</h3>
                  <p className=" text-light">
                    Satisfying cravings, one roll at a time.
                    <br />
                    View all rolls
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Sandwich">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-4.jpg"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Sandwich</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Sandwich at a time.
                    <br />
                    View all Sandwich
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Dosa">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Dosa</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Dosa at a time.
                    <br />
                    View all Dosa
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Idli">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://static01.nyt.com/images/2024/08/19/multimedia/idli-2-mvzc/idli-2-mvzc-mediumSquareAt3X-v2.jpg"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Idli</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Idli at a time.
                    <br />
                    View all Idli
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Nooddles">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Nooddles</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Nooddles at a time.
                    <br />
                    View all Nooddles
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Sweettt">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://www.ahmedabadonlineflorists.com/images/SWCNUUN189-KS_big.webp"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Sweet</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Sweet at a time.
                    <br />
                    View all Sweet
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 position-relative pannel-foodie">
              <Link to="/Cakeee">
                <div className="rolls">
                  <img
                    className=" w-100"
                    src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/eggless-black-forest-cake-recipe.jpg"
                    alt=""
                  />
                </div>
                <div className=" position-absolute rolls-addjst">
                  <h3 className=" text-danger">Cakeee</h3>
                  <p className=" text-light">
                    Satisfying cravings, one Cakeee at a time.
                    <br />
                    View all Cakeee
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </marquee>
      </div>
    </>
  );
};

export default SectionNo2;

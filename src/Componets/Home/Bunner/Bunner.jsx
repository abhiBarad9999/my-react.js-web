import React from "react";
import "./Bunner.css";
import { Link } from "react-router-dom";

const Bunner = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6 items">
                  <h1 className="heading-one">Milkashake</h1>
                  <p className="font-s col-9">
                    A milkshake(sometimes simply called a shake) is a sweet
                    beverage made by blending milk,ice cream,and flavorings or
                    sweeteners such as butterscotch,caramel sauce,chocolate
                    syrup, or fruit syrup into a thick,sweet,cold mixture.
                  </p>
                  <div>
                    <Link to="/Milkshake">
                      <button type="button" className="btn b_now">
                        <b>View All Milkshake's</b>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    className=" img-fluid w-100 d-block one"
                    src="https://bellyfull.net/wp-content/uploads/2022/01/Samoa-Cookies-Milkshake-blog-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6 items">
                  <h1 className="heading-one">Burger</h1>
                  <p className="font-s col-9">
                    Burger is American fast food.it's a type of sandwich with a
                    patty of cooked ground meat between the two halves of a
                    bun.Tomatoes,onions,cheese,salad and dips may also be added.
                  </p>
                  <div>
                    <Link to="/Burger">
                      <button type="button" className="btn b_now">
                        <b>View All Burger's</b>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    className="w-100  img-fluid d-block one"
                    src="https://static01.nyt.com/images/2021/05/23/dining/ss-hamburgers/merlin_187538457_9853da3a-0bd4-4637-9396-75fc43fdc9e6-mediumSquareAt3X.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6 items">
                  <h1 className="heading-one">Pizza</h1>
                  <p className="font-s col-9">
                    Life is too short to skip pizza. <br />
                    If you can't fix it with pizza, it's a serious problem.{" "}
                    <br />
                    You had me at pizza. <br />
                    Happiness is a slice of pizza. <br />
                    On the eighth day, God created pizza.
                  </p>
                  <div>
                    <Link to="/Pizza">
                      <button type="button" className="btn b_now">
                        <b>View All Pizza's</b>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    className=" w-100 img-fluid d-block one"
                    src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Bunner;

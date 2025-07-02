import React, { useContext, useState } from "react";
import abhilogo from "../../../Logo/abhilogo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import Modal from "react-bootstrap/Modal";
import User from "../Profile/User";

const Header = () => {
  let [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <User /> : ""}
      <nav className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 z-3">
        <div className="container p-0">
          <a className="navbar-brand " href="#">
            {" "}
          </a>
          <div className=" d-flex  align-items-center d-lg-none d-inline">
            <img src={abhilogo} alt="" className="nav-logo me-5" />

            <h2 className="col-lg-3  nev-hed text-center">Abhi's Cafe</h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse row"
            id="navbarSupportedContent"
          >
            <div className="col-lg-1  d-flex justify-content-center align-items-center">
              <img
                src={abhilogo}
                alt=""
                className="nav-logo   d-none d-lg-inline  "
              />
            </div>
            <h2 className="col-lg-3 d-none d-lg-inline  nev-hed text-center">
              Abhi's Cafe
            </h2>
            <ul className="navbar-nav   ms-auto  mb-lg-0 col-lg-6 d-flex align-items-center justify-content-between text-center">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item ">
                <div className="btn-group">
                  <button
                    type="button"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>items's</b>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link
                        to="/Pizza"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item " type="button">
                          Pizza
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Burger"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Burger
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Milkshake"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Milkshake
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Thali"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Thali
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Sweettt"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Sweet
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Northindian"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Northindian
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Rolls"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Rolls
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Sandwich"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Sandwich
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Dosa"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Dosa
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Idli"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Idli
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Nooddles"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Nooddles
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Cakeee"
                        className="text-decoration-none text-dark"
                      >
                        <button className="dropdown-item" type="button">
                          Cakeee
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item ">
                <Link to="/Chefss" className="nav-link">
                  <b> Chefs</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Aboutus" className="nav-link">
                  <b> About</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contactmee"
                  aria-current="page"
                  href="#"
                >
                  <b>Contact</b>
                </Link>
              </li>

                <li className=" nav-item d-flex gap-2">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => setShowLogin(!showLogin)}
                  >
                    <i className="fa-regular fs-5 fa-user"></i>
                  </button>
                </li>
               
                <li className=" nav-item">
                  <Link to="/cart">
                    <i className="fa-solid  text-black fa-cart-shopping fs-5 position-relative"></i>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

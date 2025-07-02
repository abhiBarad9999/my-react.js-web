import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import{} from '@fortawesome/free-brands-svg-icons'
// import{} from '@fortawesome/free-regular-svg-icons'
// import{faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./Footer.css";
import { Link } from "react-router-dom";
import abhilogo from "../../../Logo/abhilogo.png";

const Footer = () => {
 
  
  return (
    <>
      <footer>
        <div className="container mt-5">
          <div className="row py-3">
            <div className="col-lg-2 col-md-6 col-12 py-3 text-center justify-content-center align-items-center d-flex">
              <div>
                <img src={abhilogo} alt="" className="foot-logo w-50 " />
                <h4 className=" ajdust-abhi">Abhi's Cafe</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 py-3 text-center text-lg-start">
              <h3 className=" text-light ">Our Menu</h3>
              <div className=" d-lg-flex d-md-flex row justify-content-around">
                <div className=" d-grid col-5 ">
                  <Link
                    to="/Pizza"
                    className=" text-decoration-none text-light "
                  >
                    Pizza
                  </Link>{" "}
                  <Link
                    to="/Burger"
                    className=" text-decoration-none text-light"
                  >
                    Burger
                  </Link>{" "}
                  <Link
                    to="/Milkshake"
                    className=" text-decoration-none text-light"
                  >
                    Milkshake
                  </Link>{" "}
                  <Link
                    to="/Thali"
                    className=" text-decoration-none text-light"
                  >
                    Thali
                  </Link>{" "}
                  <Link
                    to="/Sweettt"
                    className=" text-decoration-none text-light"
                  >
                    Sweet
                  </Link>{" "}
                  <Link
                    to="/Northindian"
                    className=" text-decoration-none text-light"
                  >
                    Northindain
                  </Link>{" "}
                </div>
                <div className=" d-grid col-5">
                  <Link
                    to="/Rolls"
                    className=" text-decoration-none text-light"
                  >
                    Rolls
                  </Link>{" "}
                  <Link
                    to="/Sandwich"
                    className=" text-decoration-none text-light"
                  >
                    Sandwich
                  </Link>{" "}
                  <Link
                    to="/Dosa"
                    className=" text-decoration-none text-light"
                  >
                    Dosa
                  </Link>{" "}
                  <Link
                    to="/Idli"
                    className=" text-decoration-none text-light"
                  >
                    Idli
                  </Link>{" "}
                  <Link
                    to="/Nooddles"
                    className=" text-decoration-none text-light"
                  >
                    Noodles
                  </Link>{" "}
                  <Link
                    to="/Cakeee"
                    className=" text-decoration-none text-light"
                  >
                    Cake
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-2   col-md-6 col-12  py-3 d-flex flex-column text-center text-lg-start">
              <h3 className=" text-light">Useful Link</h3>
              <div className=" d-flex flex-column">
                <Link
                  to="/Aboutus"
                  className=" text-decoration-none text-light"
                >
                  About us
                </Link>{" "}
                <Link
                  to="/contactmee"
                  className=" text-decoration-none text-light"
                >
                  Contact
                </Link>{" "}
                <a className=" text-decoration-none text-light">
                  Help & Support
                </a>{" "}
                <a className=" text-decoration-none text-light">
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 py-3 text-center text-lg-start">
              <h3 className="text-light">Abhi's Cafe</h3>
              <ul className=" list-unstyled">
                <li>
                  <a
                    href="#"
                    className=" text-decoration-none text-light  fst-normal"
                  >
                    abhaybarad9999@gamil.com
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-decoration-none text-light"
                  >
                    +91 7622941002
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-decoration-none text-light"
                  >
                   Ahmedabad
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-12 py-3 text-center d-lg-flex flex-column justify-content-around">
              <h3 className="  text-light">Social</h3>
              <i className="fa-brands fs-3 text-light fa-square-facebook m-2"></i>{" "}
              <i className="fa-brands text-light fs-3 fa-instagram m-2"></i>
              <i className="fa-brands text-light fs-3 fa-linkedin m-2"></i>
              <i className="fa-brands  text-light fs-3 fa-whatsapp m-2"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

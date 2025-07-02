// ContactForm.js
import React from "react";
import "./Contact.css";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
    
  return (
    <>
    <Header/>
    <div className="container bg-gray-100 flex items-center justify-center mt-4 p-4 p-lg-0">
      <div className="row bg-light rounded-5 shadow">
        <div className="col-lg-4 col-md-4 p-3 contact-right-side text-white rounded-5">
          <h2 className="text-xl  mb-2">Contact information</h2>
          <p className="mb-6 text-sm text-gray-300">
            If you have any questions, feel free to get in touch with us.
          </p>
          <ul className="text-sm">
            <li className="flex items-center">
              <div className="mr-2"><i className="fa-solid fa-phone"></i></div>
                            +91 7622941002

            </li>
            <li className="flex items-center">
              <div className="mr-2"><i className="fa-solid fa-square-envelope"></i></div>
              <p>              abhaybarad@9999.com
</p>
            </li>
            <li className="flex items-start">
              <div className="mr-2"><i className="fa-solid fa-location-dot"></i></div>
              <p>              Ahmedabad
</p>
            </li>
            <li className="flex items-center mt-4">
              <div className="mr-2"><i className="fa-solid fa-clock"></i></div>
              <p>              Monday–Friday, 9:00 AM - 6:00 PM
</p>
            </li>
          </ul>

        </div>
        <div className="col-lg-8 col-md-8  p-5 bg-light rounded-5">
          <form className="">
            <div className="d-flex justify-content-between">
              <div className="adjust-place-h ">
                <label className="text-sm font-medium">First name</label>
                <br />
                <input
                  type="text"
                  className="mt-1 w-100 border p-2"
                  placeholder="First name"
                />
              </div>
              <div className="adjust-place-h">
                <label className="text-sm font-medium">Last name</label>
                <br />
                <input
                  type="text"
                  className="mt-1 w-100 border p-2"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="">
              <div>
                <label className=" mt-3 text-sm font-medium">Email</label>
                <br />
                <input
                  type="email"
                  className="w-100 mt-1 border rounded-md p-2"
                  placeholder="email@example.com"
                />
              </div>
              <div className="">
                <label className="mt-3 font-medium">Phone number</label>
                <br />
                <input
                  type="tel"
                  className="w-100 mt-1  border p-2 rounded-md"
                  placeholder="+91 (999) 000-0000"
                />
              </div>
              <div className=" mt-3">
                <label className="font-medium w-75">Message</label>
                <textarea
                  rows="5"
                  className="w-100 mt-1 p-2 border rounded-md"
                  placeholder="Your message....."
                ></textarea>
              </div>
              <div>
                <button type="submit" className=" bg-danger p-2 border-0 text-light rounded-2 px-4 mt-3 fw-bolder">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;

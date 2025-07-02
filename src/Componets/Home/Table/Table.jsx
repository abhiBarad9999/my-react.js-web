import React from "react";
import "./Table.css";
import Header from "../Navbar/Header";

const Table = () => {
  return (
    <>
      <div className="container mt-4" id="Tablebook">
        <div className="row">
          <h2 className=" text-center text-danger">Book Your Stay With Us</h2>
          <div className="col-lg-4">
            <img
              className=" rounded-2 w-100"
              src="https://m.media-amazon.com/images/I/51-wYyhS4qL._UXNaN_FMjpg_QL85_.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-8 table-bkd">
            <form className="email-form">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    name="name"
                    className=" w-100 p-2"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="email"
                    className=" w-100 p-2"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className=" w-100 p-2"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    required=""
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="date"
                    name="date"
                    className=" w-100 p-2"
                    id="date"
                    placeholder="Date"
                    required=""
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="time"
                    className=" w-100 p-2"
                    name="time"
                    id="time"
                    placeholder="Time"
                    required=""
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="number"
                    className=" w-100"
                    name="people"
                    id="people"
                    placeholder="# of people"
                    required=""
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className=" text-center mt-2">
                <button className="t-btnn" type="submit">
                  Book Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

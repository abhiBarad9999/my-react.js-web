import React from "react";
import { MilkshakeData } from "./MilkshakeData";
import { Card } from "react-bootstrap";
import "./AvailableMilkshake.css";

import Header from "../../Home/Navbar/Header";
import Footer from "../../Home/Footer/Footer";
function Milkshake() {
  return (
    <>
      <Header />
      <div className="container milkshake-bkd mt-5">
        <h1 className="text-center milk-head">Milkshake Available Here</h1>
        <div className="row mb-5 d-flex align-items-center">
          {MilkshakeData.map((v, i) => {
            return <DetailsofStudents details={v} />;
          })}
        </div>
      </div>
      <div className="container milksss">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h3 className="milk-heading">Cookies and Cream Dream </h3>
            <p>
              Basically this is just steeping oreos in milk until they are soft
              enough to be totally combined with the milk. · Vanilla ice cream.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="milk-heading"> Chocolate Dream Shakes</h3>
            <p>
              These milkshakes are a chocolate lovers dream. Made with vanilla
              ice cream, chocolate-flavored syrup, cold coffee and semisweet
              chocolate chips.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="milk-heading">Oreo & Nutella Milkshake</h3>
            <p>
              Not for the faint hearted, this Oreo & Nutella Milkshake is super
              sweet.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="milk-heading">Coffe Milkshake</h3>
            <p>
              A milkshake is a sweet beverage made by blending milk, ice cream,
              and flavorings or sweeteners such as butterscotch, caramel sauce,
              chocolate syrup, ...
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="milk-heading">Strawberry Marshmallow Milkshake</h3>
            <p>
              We've discovered what's destined to become the next classic combo
              - fruit and fluff. This delicious Strawberry Marshmallow Milkshake
              blends up creamy vanilla ice cream with fresh strawberries{" "}
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="milk-heading">Salted Caramel Milkshake</h3>
            <p>
              {" "}
              Salted caramel milkshakes made with vanilla bean ice cream, salted
              caramel sauce and dark salted caramel chocolate.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color-milkshake text-center">
              If any of these Milkshake's made you drool, head to Abhi’s app and
              place your order.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Milkshake;

function DetailsofStudents(props) {
  // console.log(props.details.title);

  return (
    <>
      <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className=" w-100 milk-img-s" src={props.details.url} />
          <Card.Body className="card-backdg">
            <Card.Title className="milk-heading">
              {" "}
              {props.details.title}
            </Card.Title>
            <Card.Text className="pizza-font-s">
              {/* {props.details.body} */}
            </Card.Text>
            <div class="d-flex justify-content-between text-decoration-none">
              <a className="price-milk" href="#">
                ₹{props.details.price}
              </a>
                         <button className="btn bg-success text-light" type="button">Add</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

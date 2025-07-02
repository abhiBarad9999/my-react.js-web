import React, { useState } from "react";
import {BurgerData} from "./BurgerData";
import  "./AvailableBurger.css";
import Header from "../../../Componets/Home/Navbar/Header";
import Footer from "../../../Componets/Home/Footer/Footer";
import { Card } from "react-bootstrap";


const AvailableBurger = () => {
    
  return (
    <>
     <Header />
      <div className="container burger-veg mt-5">
        <h1 className="text-center burger-heading">Available veg Burger's</h1>
        <div className="row d-flex align-items-center">
          {BurgerData.map((v, i) => {
            return <DetailsofBurger details={v} />;
          })}
        </div>
      </div>
      <div className="container burger-backg mt-5">
            <div className="row">
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">Crispy Veggie Burger</h1>
                    <p className="smail-style-f-b">A flavorful patty made with a blend of 7 premium veggies, topped with
                        zesty cocktail sauce, all served between soft, premium buns. Perfectly satisfying and
                        full of flavor.</p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">Veg Maharaja Mac Burger</h1>
                    <p className="smail-style-f-b">Savor our filling 11 layer burger! Double the indulgence with 2 corn &
                        cheese patties, along with jalapeños, onion, cheese, tomatoes, lettuce, and spicy
                        Cocktail sauce.</p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">McSpicy Paneer Burger</h1>
                    <p className="smail-style-f-b">Indulge in rich & filling spicy paneer patty served with creamy sauce,
                        and crispy lettuce—irresistibly satisfying!</p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">McVeggie Double Patty Burger</h1>
                    <p className="smail-style-f-b">Savour your favorite spiced double veggie patty, lettuce, mayo, between
                        toasted sesame buns in every bite</p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">McSpicy Deluxe Paneer Burger</h1>
                    <p className="smail-style-f-b">Indulge in a burger made with a spicy and crispy Paneer Patty, Chipotle
                        Sauce, Tomatos, Lettuce & Cheese.</p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">McSpicy Premium Veg Burger</h1>
                    <p className="smail-style-f-b">A wholesome Spicy Paneer patty, Lettuce topped with Jalapenos and
                        Cheese slice, Spicy Cocktail sauce & Cheese sauce
                    </p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">Mexican McAloo Tikki Burger NONG</h1>
                    <p className="smail-style-f-b">Your favourite McAloo Tikki with a fusion spin of Chipotle sauce. No
                        Onion and No Garlic</p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">Mexican McAloo Tikki Double Patty Burger</h1>
                    <p className="smail-style-f-b">A fusion of International taste combined with your favourite aloo tikki
                        now with two patties
                    </p>
                </div>
                <div className="col-md-12 adjust-burger">
                    <h1 className="heading-color-b">McVeggie Burger</h1>
                    <p className="smail-style-f-b">Savour your favorite spiced veggie patty, lettuce, mayo, between
                        toasted sesame buns in every bite</p>
                </div>
                <div className="col-md-12 adjust-burger">
                  <h1 className="heading-color-b">
              If any of these Burger made you drool, head to Abhi’s app and
              place your order.
            </h1>
                </div>
            </div>
        </div>
           <Footer/>
    </>
  );
};

export default AvailableBurger;

function DetailsofBurger(props) {
  // console.log(props.details.title);

  return (
    <>
   
      <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
        <Card style={{ width: "18rem" }}>
          < Card.Img variant="top" className=" burger-veg-back w-100 img-fluid" src={props.details.url} />
          <Card.Body className="burger-body-back">
            <Card.Title> {props.details.title}</Card.Title>
            <Card.Text>{/* {props.details.body} */}</Card.Text>
            <div class="d-flex justify-content-between text-decoration-none">
              <a className="price-burger" href="#">₹{props.details.price}</a>
                         <button className="btn bg-success text-light" type="button">Add</button>
            </div>
          </Card.Body>
        </Card>
      </div>
   
    </>
  );
}

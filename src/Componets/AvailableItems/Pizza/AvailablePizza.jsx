import React, { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import {PizzaData} from "./PizzaData"
import { Card } from "react-bootstrap";
import "./AvailablePizza.css";
import Header from '../../Home/Navbar/Header';
import Footer from '../../Home/Footer/Footer';

import { cardt } from "../../../context";


function Pizza() {
  let [count,setcount]=useState(0)

  return (
    <>
<cardt.Provider value={{count,setcount}}>
     <Header />
      <div className="container veg-pizza mt-5">
        <h1 className="text-center available-pizza mb-4">
          Veg Pizza Available Here
        </h1>
        <div className="row d-flex align-items-center mb-5">
          {PizzaData.map((v, i) => {
            return <Detailsofpizzalist details={v}  />;
          })}
        </div>
      </div>
      <div className="container pizza-backg">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading-color">
              Treat Yourself to Delicious Abhi’s Veg Pizzas
            </h1>
            <p className="smail-style-f">
              If you love pampering your taste buds with the best pizza flavors
              in town, you’ll fall in love with the exciting range of veg Abhi’s
              pizzas. From freshly sourced veggies to 100% authentic mozzarella
              cheese- our veg pizzas have everything to satisfy your pizza
              cravings.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color">
              Order Veg Pizza Online from Abhi’s
            </h1>
            <p className="smail-style-f">
              Gone are the old days when people had to step out of their houses
              to enjoy a slice of freshly baked pizza. To ensure you enjoy the
              fantastic flavors of our veg pizzas right at the comfort of your
              home, we provide super quick home delivery for all our pizzas. You
              just have to browse the nearest Abhi’s veg pizza menu to pick the
              pizza(s), and add it to the cart. You can then complete your
              payment to place the order successfully. A delivery executive from
              our side will ensure you receive your ordered pizza hot and fresh
              within 30 minutes.
            </p>
          </div>
          <div className="col-md-12">
            <p className="smail-style-f">
              {" "}
              All our vegetarian pizza range is made on order, so you can feel
              the freshness in every bite. You can download our official Abhi’s
              mobile app from Play Store or use our website to place your order
              of a Abhi’s veg pizza of your choice. Irrespective of the veg
              pizza type you choose for yourself, you’re sure to love it. Chefs
              at Abhi’s use the freshest ingredients to prepare all the ordered
              pizzas, along with a few secret herbs. It is what separates Abhi’s
              pizzas from others. If all this made you drool, search for a
              Abhi’s restaurant near me and place your order today.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color">Margherita Pizza</h1>
            <p className="smail-style-f">
              Made with the goodness of 100% original mozzarella cheese, the
              Margherita pizza Abhi’s is prepared using cheese as the only
              topping. You can double the fun by adding more cheese as a topping
              or a few favorite toppings of your choice.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color">Farmhouse Pizza</h1>
            <p className="smail-style-f">
              {" "}
              Veggie lovers will certainly fall in love with our Abhi’s
              Farmhouse pizza. This delicious pizza has the best and the
              freshest tomatoes, cheese, succulent mushrooms, and crisp
              capsicums as toppings.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color">Peppy Paneer Pizza</h1>
            <p className="smail-style-f">
              Our peppy paneer pizza Abhi’s is loaded with chunky paneer pieces,
              spiced red pepper, cheese, and crispy capsicum as toppings. You
              can make it more delicious by upgrading it to a cheese burst
              pizza.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color">Mexican Green Wave Pizza</h1>
            <p className="smail-style-f">
              Our Mexican green wave pizza is baked to perfection with juicy
              tomatoes, crunchy onions, crisp capsicum, and fresh jalapeno. A
              dash of secret Mexican herbs is sprinkled to give the pizza its
              distinct flavour.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color">Deluxe Veggie Pizza</h1>
            <p className="smail-style-f">
              Easy on the spices but high on vegetables, our deluxe veggie pizza
              is made using the goodness of onions, capsicum, mushrooms, paneer,
              and golden corn. Not to forget the generous amount of cheese added
              to take the taste a notch higher.
            </p>
          </div>
          <div className="col-md-12">
            <h1 className="heading-color"> Veggie Paradise Pizza</h1>
            <p className="smail-style-f">
              As the name suggests, the veggie paradise pizza is heaven for
              vegetarians. It comes loaded with the freshest capsicum, red
              paprika, golden corn, and black olives. The addition of cheese and
              herbs makes the pizza more flavorful.
            </p>
            <h1 className="heading-color">
              If any of these pizzas made you drool, head to Abhi’s app and
              place your order.
            </h1>
          </div>
        </div>
      </div>
      ;
      <Footer/>
     </cardt.Provider>
    </>
  );
}

export default Pizza;

function Detailsofpizzalist(props) {
  // console.log(props.details.title);

  let value = useContext(cardt)
  console.log(value.count);
  
  return (
    <>
      <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className=" w-100 piza-iimg-s" src={props.details.url} />
          <Card.Body className="card-backd">
            <Card.Title> {props.details.title}</Card.Title>
            <Card.Text className="pizza-font-s">
              {/* {props.details.body} */}
            </Card.Text>
            <div class="d-flex justify-content-between text-decoration-none">
              <a className="price" href="#">₹{props.details.price}</a>
   
                         <button className="btn bg-success text-light" type="button">Add</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    

    </>
  );
}

// import React, { useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import Card from "react-bootstrap/Card";
// import { PizzaData } from "./PizzaData";
// import { Card } from "react-bootstrap";
// import "./AvailablePizza.css";
// import Header from "../../Home/Navbar/Header";
// import Footer from "../../Home/Footer/Footer";

// function Detailsofpizzalist(props) {
//   const { details, addToWishlist } = props;

//   return (
//     <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
//       <Card style={{ width: "18rem" }}>
//         <Card.Img
//           variant="top"
//           className="w-100 piza-iimg-s"
//           src={details.url}
//         />
//         <Card.Body className="card-backd">
//           <Card.Title>{details.title}</Card.Title>
//           <Card.Text className="pizza-font-s">
//             {/* You can show description here */}
//           </Card.Text>
//           <div className="d-flex justify-content-between text-decoration-none">
//             <span className="price">₹{details.price}</span>
//             <button
//               className="btn bg-success buy-now-pizza text-light"
//               onClick={() => addToWishlist(details)}
//             >
//               Add
//             </button>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }


// function Pizza() {
//   const [wishlist, setWishlist] = useState([]);

//   const handleAddToWishlist = (pizzaItem) => {
//     setWishlist((prev) => [...prev, pizzaItem]);
//     console.log("Wishlist:", [...wishlist, pizzaItem]); // Optional: for debugging
//   };

//   return (
//     <>
//       <Header />
//       <div className="container veg-pizza mt-5">
//         <h1 className="text-center available-pizza mb-4">
//           Veg Pizza Available Here
//         </h1>
//         <div className="row d-flex align-items-center mb-5">
//           {PizzaData.map((v, i) => (
//             <Detailsofpizzalist
//               key={i}
//               details={v}
//               addToWishlist={handleAddToWishlist}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Wishlist display (optional for demo) */}
//       {wishlist.length > 0 && (
//         <div className="container mt-4">
//           <h2 className="text-center">Wishlist</h2>
//           <ul>
//             {wishlist.map((item, index) => (
//               <li key={index}>
//                 {item.title} - ₹{item.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Pizza Description Section */}
//       {/* ... existing description code ... */}

//       <Footer />
//     </>
//   );
// }

// export default Pizza;

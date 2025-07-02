import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AvailableBurger from "./Componets/AvailableItems/Burger/AvailableBurger.jsx";
import AvailablePizza from "./Componets/AvailableItems/Pizza/AvailablePizza.jsx";
import AvaliableMilkshake from "./Componets/AvailableItems/Milkshake/AvailableMilkshake.jsx";
import Home from "./Componets/Home/Homepart/Home.jsx";
import Rolls from "./Componets/AvailableItems/Rolls/Rolls.jsx";
import Thaali from "./Componets/AvailableItems/Thaali/Thaali.jsx";
import Sandwich from "./Componets/AvailableItems/Sandwich/Sandwice.jsx";
import NorthIndian from "./Componets/AvailableItems/Northindian/NorthIndian.jsx";
import Noodles from "./Componets/AvailableItems/Noodles/Noodles.jsx";
import Cake from "./Componets/AvailableItems/Cake/Cake.jsx";
import Sweet from "./Componets/AvailableItems/Sweet/Sweet.jsx";
import Dhosa from "./Componets/AvailableItems/Dosa/Dhosa.jsx";
import Idli from "./Componets/AvailableItems/Idli/Idli.jsx";
import Contact from "./Componets/Home/Contact/Contact.jsx";
import Table from "./Componets/Home/Table/Table.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About2 from "./Componets/Home/About2/About2.jsx";
import Chefss from "./Componets/Home/Chefss/Chefss.jsx";
import Layout from "./Componets/Home/Homepart/Layout.jsx";
import Wishlist from "./Componets/Home/Wishlist/Wishlist.jsx";
import User from "./Componets/Home/Profile/User.jsx";
let allrout = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: "Burger",
    element: (
      <Layout>
        <AvailableBurger />
      </Layout>
    )
  },
  {
    path: "Pizza",
    element: (
      <Layout>
        <AvailablePizza/>
      </Layout>
    )
  },
  {
    path: "Milkshake",
    element: (
      <Layout>
        <AvaliableMilkshake/>
      </Layout>
    ) 
  },
  {
    path: "Rolls",
    element: (
      <Layout>
        <Rolls/>
      </Layout>
    )
  },
  {
    path: "Thali",
    element: (
      <Layout>
        <Thaali/>
      </Layout>
    )
  },
  {
    path: "Sandwich",
    element: (
      <Layout>
        <Sandwich/>
      </Layout>
    )
  },
  {
    path: "Northindian",
    element:  (
      <Layout>
        <NorthIndian/>
      </Layout>
    ) 
  },
  {
    path: "Nooddles",
    element:  (
      <Layout>
        <Noodles/>
      </Layout>
    )
  },
  {
    path: "Cakeee",
    element: (
      <Layout>
        <Cake/>
      </Layout>
    )
  },
  {
    path: "Sweettt",
    element: (
      <Layout>
        <Sweet/>
      </Layout>
    )
  },
  {
    path: "Dosa",
    element:  (
      <Layout>
        <Dhosa/>
      </Layout>
    )
  },
  {
    path: "Idli",
    element: (
      <Layout>
        <Idli/>
      </Layout>
    )
  },
  {
    path: "Aboutus",
    element: (
      <Layout>
        <About2/>
      </Layout>
    )
  },
  {
    path: "Chefss",
    element: (
      <Layout>
        <Chefss/>
      </Layout>
    )
  },
  {
    path: "contactmee",
    element: (
      <Layout>
        <Contact/>
      </Layout>
    )
  },
  {
    path: "Tablebok",
    element: (
      <Layout>
        <Table/>
      </Layout>
    )
  },
  {
    path: "cart",
    element: (
      <Layout>
        <Wishlist/>
      </Layout>
    )
  },
  {
    path:'user',
    element:<User/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={allrout} />
  </StrictMode>
);

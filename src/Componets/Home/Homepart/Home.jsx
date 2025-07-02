import React from "react";
import SectionNo2 from "../section2/SectionNo2";
import SectionNo3 from "../section3/SectionNo3";
import Banner from "../Bunner/Bunner";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import HeadPage from "../HeadPage/HeadPage";
import About from "../About/About";
import Table from "../Table/Table";
import Chefs from "../Chefs/Chefs";
import Homepin from "../Homepage/Homepin";
import Wishlist from "../Wishlist/Wishlist";
import ShopCart from "../ShopCart/ShopCart";
import User from "../Profile/User";

const Home = () => {
  return (
    <>

      {/* <Homepin/> */}
      <Header />
      <HeadPage />
      <Banner />

      <SectionNo2 />

      <Table />
      <Chefs />

      <About />
      <SectionNo3 />
      <Footer />
    </>
  );
};

export default Home;

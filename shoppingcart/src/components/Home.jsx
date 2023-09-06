import React from "react";
import Category from "./category";
import Offer from "./offer";
import Suit from "./suit";
import Footer from "./footer";
import Hero from "./hero"

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Suit />
      <Offer />
      <Footer />
    </>
  );
};

export default Home;

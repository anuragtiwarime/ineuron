import React from "react";
import Header from "../components/navBar";
import MainSection from "../components/mainsection";
import Cards from "../components/cards";
import Mentor from "../components/mentor";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <MainSection />
      <br />
      <div className="d-flex justify-content-center">
        <Cards
          title="Python"
          desc="Learn Python and Build 07 Projects"
          btn="Buy Now"
        />
        <Cards
          title="React Js "
          desc="Learn ReactJs and Build 16 Projects"
          btn="Buy Now"
        />
        <Cards
          title="React Native"
          desc="Learn React Native and Build 05 Projects"
          btn="Buy Now"
        />
      </div>
      <Mentor />
      <Footer />
    </>
  );
}

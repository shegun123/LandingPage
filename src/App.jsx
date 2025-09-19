import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import FourthSection from "./component/FourthSection";
import FivethScection from "./component/FivethScection";
import FooterSection from "./component/FooterSection";
import BackgroundColor from "./component/BackgroundColor";

function App() {
  return (
    <>
      <NavBar />
      <BackgroundColor />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FivethScection />
      <FooterSection />
    </>
  );
}

export default App;

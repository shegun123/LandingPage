import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import Auth from "./component/Auth";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import FourthSection from "./component/FourthSection";
import FivethScection from "./component/FivethScection";
import FooterSection from "./component/FooterSection";
import Drawer from "./component/Drawer"
import BillingToggle from "./component/BillingToggle"

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FivethScection />
      {/* <BillingToggle /> */}
      <FooterSection />
      {/* <Drawer/> */}
    </>
  );
}

export default App;
 
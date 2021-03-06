import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServiceSection />
      <Reviews />
      {/* <InfoSection {...homeObjThree} /> */}
      <ContactForm {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;

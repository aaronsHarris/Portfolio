import MotionHoc from "../components/animations/MotionHoc";
import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import Sections from "../components/Sections";



const HomeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <Hero />
      <Sections />
    </>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;

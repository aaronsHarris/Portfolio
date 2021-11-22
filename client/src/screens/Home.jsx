import MotionHoc from "../components/animations/MotionHoc";
import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import { heroObj, homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "../components/SectionData";



const HomeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  console.log('Thanks for visiting my portfolio site, check out the responsive design!')
  console.log('also if you have any suggestions about this warning let me know on github. click the link above.')

  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <Hero {...heroObj}/>
      <Sections {...homeObjFour}/>
      <Sections {...homeObjOne}/>
      <Sections {...homeObjTwo}/>
      <Sections {...homeObjThree}/>
    </>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;

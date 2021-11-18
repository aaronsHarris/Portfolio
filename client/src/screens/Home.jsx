import MotionHoc from "../components/animations/MotionHoc";
import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";




const HomeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <h1>Aaron Harris</h1>
      <p>Full Stack Developer</p>
    </>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;

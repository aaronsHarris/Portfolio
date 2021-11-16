import MotionHoc from "../components/animations/MotionHoc";
import styled from "styled-components";
import { useState } from "react";




const HomeComponent = () => {
  const [click, setClick] = useState(false);
  return (
    <>
    
      <h1>Aaron Harris</h1>
      <p>Full Stack Developer</p>
    </>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;

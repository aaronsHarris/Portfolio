import { useState } from "react";
import Video from "../assets/video.mp4";
import { Button } from "./styles/Button.styles";
import {
  HeroBG,
  HeroContainer,
  VideoBG,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles/Hero.styles";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBG>
      <HeroContent>
        <HeroH1>Aaron Harris</HeroH1>
        <HeroP>Full Stack Developer</HeroP>
        <HeroBtnWrapper>
          <Button
            to="/contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

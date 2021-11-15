import MotionHoc from "../components/animations/MotionHoc";
import '../assets/about.css'
const AboutComponent = () => {
  return (
    <>
      <h1>About</h1>
      <p className="statement">I am a software engineer diving head first into the future of the tech industry. As a Chef and business manager in the hospitality industry I always thrived in the fiery pace of the kitchen or the customer satisfaction of the dining room. I love pushing myself in my personal life with cycling and being creative through writing or comedy. As a software engineer I will consistently bring my fire and passion for the customer to my work.</p>
    </>
  )
};

const About = MotionHoc(AboutComponent);

export default About

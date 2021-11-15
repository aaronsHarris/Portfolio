import MotionHoc from "../components/animations/MotionHoc";

const ProjectsComponent = () => {
  return (
    <>
      <h1>Projects</h1>
      <a href="https://peaceful-yalow-61d1e9.netlify.app">MyHero</a>
      <br/>
      <a href="https://devupapp.netlify.app">DevUp</a>
      <br/>
      <a href="https://brave-kepler-dcfbd2.netlify.app">UpCook</a>
    </>
    
  )
};

const Projects = MotionHoc(ProjectsComponent);



export default Projects

import MotionHoc from "../components/animations/MotionHoc";
import styled from "styled-components";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectCard,
  ProjectImage,
  ProjectH1,
  ProjectH2,
  ProjectP,
} from "../components/styles/project.styled";

const ProjectsComponent = () => {
  return (
    <ProjectContainer>
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper>
      <a href="https://peaceful-yalow-61d1e9.netlify.app">
        <ProjectCard>
          <ProjectImage src="https://picsum.photos/200" />
          <ProjectH2>MyHero</ProjectH2>
          <ProjectP>A character creation app</ProjectP>
        </ProjectCard>
        </a>
        <a href="https://devupapp.netlify.app">
        <ProjectCard>
          <ProjectImage src="https://picsum.photos/200" />
          <ProjectH2>DevUp</ProjectH2>
          <ProjectP>An Inventory Site</ProjectP>
        </ProjectCard>
        </a>
        <a href="https://brave-kepler-dcfbd2.netlify.app">
        <ProjectCard>
          <ProjectImage src="https://picsum.photos/200" />
          <ProjectH2>UpCook</ProjectH2>
          <ProjectP>A Recipe Blog</ProjectP>
        </ProjectCard>
        </a>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;


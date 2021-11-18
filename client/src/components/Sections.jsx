import React from "react";
import { Button } from "./styles/Button.styles";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  TextWrapper,
  TopLine,
  Header,
  Subtitle,
  BtnWrap,
  Column2,
  imgWrap,
  Img,
} from "./styles/Sections.styles";

const Sections = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Header>Header</Header>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrap>
                <Button to="home">Button</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2></Column2>
          <imgWrap>
            <Img />
          </imgWrap>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Sections;

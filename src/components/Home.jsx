import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

// Container styled components
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  top: 72px;
  display: block;
  overflow-x: hidden;

  &:after {
    background-image: url("./images/home-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    content: "";
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

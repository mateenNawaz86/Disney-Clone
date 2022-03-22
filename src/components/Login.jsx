import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg" alt="Logo One" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            maxime ad laudantium sed omnis quisquam temporibus, eum voluptatibus
            alias esse?
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png" alt="Logo Two" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

// here define a styling using styled-components

// Container responsible the full -page styling
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

// Content responsible for centered div content
const Content = styled.div`
  margin-bottom: 10vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
`;

// BgImage is responsible for landing-page background-image
const BgImage = styled.div`
  height: 100%;
  background-image: url("./images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

// call-to-action is responsible for centered div actions
const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 2vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  flex-wrap: wrap;
`;

// CTALogoOne is responsible for logo one actions
const CTALogoOne = styled.img`
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  display: block;
  margin-bottom: 12px;
  transition: all 0.2s ease-in-out;
`;

// SignUp button
const SignUp = styled.a`
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-weight: bold;
  font-size: 18px;
  padding: 16px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

// Description is responsible for text
const Description = styled.p`
  font-size: 12px;
  color: hsla(0, 0%, 95.3%, 1);
  padding: 0, 0, 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

//CTALogoTwo is responsible for 2nd logo
const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  margin-top: 2vw;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;

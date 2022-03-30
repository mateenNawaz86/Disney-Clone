import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="product-img"
        />
      </Background>

      <ImgTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78"
          alt="img-title"
        />
      </ImgTitle>

      <ControlMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="trailer" />
            <span>Trailer</span>
          </Trailer>
        </Controls>
      </ControlMeta>
    </Container>
  );
};

// Container styled-component
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  top: 72px;
  display: block;
  overflow-x: hidden;
`;

// Background styled-component
const Background = styled.div`
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

// ImgTitle styled-component
const ImgTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  -webkit-box-pack: start;
  margin: 0 auto;
  min-height: 170px;
  height: 30vw;
  padding-bottom: 24px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

// ControlMeta styled-component
const ControlMeta = styled.div`
  max-width: 874px;
`;

// Controls styled-component
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

// Player styled-component
const Player = styled.button`
  font-size: 15px;
  margin: 0 25px 0;
  padding: 0 24px;
  height: 56px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.7px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  background-color: rgb(249, 249, 249);
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 12px;
    padding: 0 10px;
    margin: 0 22px 0;

    img {
      width: 25px;
    }
  }
`;

// Trailer styled-component
const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgba(151, 151, 151, 0.34);
  margin: 0;
`;

export default Details;

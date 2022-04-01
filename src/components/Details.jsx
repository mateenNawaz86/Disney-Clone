import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import styled from "styled-components";

const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No such documents in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImgTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
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

          <AddList>
            <span></span>
            <span></span>
          </AddList>

          <UserGroup>
            <div>
              <img src="/images/group-icon.png" alt="group" />
            </div>
          </UserGroup>
        </Controls>

        <Subtitle>{detailData.subTitle}</Subtitle>
        <Description>{detailData.description}</Description>
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
  opacity: 0.6;
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
  margin: 0 25px 0 0px;
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
    margin: 0 16px 0;

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

  &:hover {
    color: #000;
  }
`;

// AddList styled-component
const AddList = styled.div`
  margin: 0 16px 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    border-color: #f08080;
  }

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translate(-8px) rotate(0deg);
    }
  }

  @media (max-width: 390px) {
    visibility: hidden;
  }
`;

// UserGroup styled-component
const UserGroup = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    border-color: #f08080;
  }

  div {
    height: 40px;
    width: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
  }

  img {
    width: 100%;
  }

  @media (max-width: 390px) {
    visibility: hidden;
  }
`;

// Subtitle styled-component
const Subtitle = styled.div`
  font-size: 1rem;
  color: rgb(249, 249, 249);
  min-height: 20px;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Description styled-component
const Description = styled.div`
  font-size: 18px;
  line-height: 1.7;
  padding: 16px 0;
  letter-spacing: 0.6px;
  color: rgb(249, 249, 249);
  user-select: none;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Details;

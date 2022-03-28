import React from "react";
import styled from "styled-components";

const Viewers = () => {
  const ViewersData = [
    {
      img: "images/viewers-disney.png",
      alt: "Disney-logo",
      id: 1,
      videoSrc: "videos/disney.mp4",
    },
    {
      img: "images/viewers-marvel.png",
      alt: "marvel",
      id: 2,
      videoSrc: "videos/marval.mp4",
    },
    {
      img: "images/viewers-national.png",
      alt: "national",
      id: 3,
      videoSrc: "videos/national-geographic.mp4",
    },
    {
      img: "images/viewers-pixar.png",
      alt: "pixar",
      id: 4,
      videoSrc: "videos/pixar.mp4",
    },
    {
      img: "images/viewers-starwars.png",
      alt: "starwars",
      id: 5,
      videoSrc: "videos/star-wars.mp4",
    },
  ];
  return (
    <Container>
      {ViewersData.map((item) => {
        return (
          <Wrapper key={item.id}>
            <img src={item.img} alt={item.alt} />
            <video loop autoPlay muted playsInline={true}>
              <source src={item.videoSrc} type="video/mp4" />
            </video>
          </Wrapper>
        );
      })}
    </Container>
  );
};

// Container styled-component
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

// Wrapper styled-component
const Wrapper = styled.div`
  padding-top: 56%;
  border-radius: 10px;
  box-shadow: #000000b0 0 26px 30px -10px, #000000ba 0 16px 10px -10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid #f9f9f91a;

  img {
    inset: 0;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    top: 0px;
    transition: all 0.5s ease-in-out;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    border: 3px solid #dcdcdc;
    box-shadow: #000000b0 0 26px 30px -10px, #000000ba 0 16px 10px -10px;
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;

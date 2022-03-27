import React from "react";
import styled from "styled-components";

const Viewers = () => {
  const ViewersData = [
    {
      img: "images/viewers-disney.png",
      alt: "Disney-logo",
      id: 1,
    },
    {
      img: "images/viewers-marvel.png",
      alt: "marvel",
      id: 2,
    },
    {
      img: "images/viewers-national.png",
      alt: "national",
      id: 3,
    },
    {
      img: "images/viewers-pixar.png",
      alt: "pixar",
      id: 4,
    },
    {
      img: "images/viewers-starwars.png",
      alt: "starwars",
      id: 5,
    },
  ];
  return (
    <Container>
      {ViewersData.map((item) => {
        return (
          <Wrapper key={item.id}>
            <img src={item.img} alt={item.alt} />
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
    object-fit: cover;
    position: absolute;
    opacity: 1;
  }
`;

export default Viewers;

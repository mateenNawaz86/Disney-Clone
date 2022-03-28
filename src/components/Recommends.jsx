import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Recommends = () => {
  const recommendsData = [
    {
      id: 1,
      cardImg: "https://lumiere-a.akamaihd.net/v1/images/image_3bc9e113.jpeg",
      title: "lumiere",
    },
    {
      id: 2,
      cardImg:
        "https://variety.com/wp-content/uploads/2021/06/Luca-Disney-Pixar.jpg",
      title: "variety",
    },
    {
      id: 3,
      cardImg:
        "https://imageio.forbes.com/specials-images/imageserve/5ec53b45b689670007209136/Pixar-Turing-Prize-Winners/960x0.jpg?fit=bounds&format=jpg&width=960",
      title: "Toy",
    },
    {
      id: 4,
      cardImg:
        "https://www.androidauthority.com/wp-content/uploads/2019/11/the-incredibles.jpg",
      title: "incredibles",
    },
  ];
  return (
    <>
      <Container>
        <h4>Recommeded for You</h4>
        <Content>
          {recommendsData.map((item) => {
            return (
              <Wrapper key={item.id}>
                <Link to="/">
                  <img src={item.cardImg} alt={item.title} />
                </Link>
              </Wrapper>
            );
          })}
        </Content>
      </Container>
    </>
  );
};

// Container styled-component
const Container = styled.div`
  padding: 20px 0 26px;
`;

// Content styled-component
const Content = styled.div`
  margin-top: 30px;
  padding: 0 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
  &:hover {
    border: 3px solid #dcdcdc;
    box-shadow: #000000b0 0 26px 30px -10px, #000000ba 0 16px 10px -10px;
    transform: scale(1.05);
  }
`;

export default Recommends;

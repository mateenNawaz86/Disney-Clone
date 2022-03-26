import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  // variable for slides auto scrolling
  let setting = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 1,
  };

  const imgData = [
    {
      img: "/images/slider-badag.jpg",
      alt: "Badag",
    },
    {
      img: "/images/slider-badging.jpg",
      alt: "badging",
    },
    {
      img: "/images/slider-scale.jpg",
      alt: "scale",
    },
    {
      img: "/images/slider-scales.jpg",
      alt: "scales",
    },
  ];
  return (
    <>
      <Carousel {...setting}>
        {imgData.map((item) => {
          return (
            <Wrapper key={item}>
              <a href="/">
                <img src={item.img} alt={item.alt} />
              </a>
            </Wrapper>
          );
        })}
      </Carousel>
    </>
  );
};

// Carousel styled-component
const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    width: 5vw;
    height: 100%;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: #dcdcdc;
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -70px;
  }

  .slick-next {
    right: -70px;
  }
`;

// Wrapper styled-component
const Wrapper = styled.div`
  border-radius: 4px;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: #000000b0 0 26px 30px -10px, #000000ba 0 16px 10px -10px;
    padding: 4px;
    display: block;
    cursor: pointer;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 3px solid #dcdcdc;
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;

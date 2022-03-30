import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Orignals from "./Orignals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

import { useSelector, useDispatch } from "react-redux";
import { movieAction } from "../features/movies/MovieSlice";
import db from "../firebase";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  // side-effect after reload the page
  useEffect(() => {
    db.collection("movies").onSnapshot((snapShot) => {
      snapShot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        movieAction.setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Orignals />
      <Trending />
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

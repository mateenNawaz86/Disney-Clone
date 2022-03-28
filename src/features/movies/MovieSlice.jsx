import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
  recommends: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie-slice",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.recommends = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const movieAction = movieSlice.actions;

export default movieSlice;

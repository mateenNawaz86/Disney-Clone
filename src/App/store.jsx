import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../features/user/UserSlice";
import movieSlice from "../features/movies/MovieSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, movies: movieSlice.reducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

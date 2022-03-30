import { createStore } from "@reduxjs/toolkit";

const initialStore = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
}

const movieSlice = createStore({
  name: 'movie',
  initialStore,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    }
  }
})

export const { setMovies } = movieSlice.actions

export const selectRecommend = state => state.recommend;
export const selectNewDisney = state => state.newDisney;
export const selectOriginal = state => state.original;
export const selectTrending = state => state.trending;

export default movieSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
      if (!state.showGptSearch) {
        state.movieNames = null;
        state.movieResults = null;
      }
    },
    addGptMovies: (state, action) => {
      state.movieNames = action.payload.movieNames;
      state.movieResults = action.payload.movieResults;
    },
  },
});

export const { toggleGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;

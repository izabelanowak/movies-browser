import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    genresList: [],
    loading: true,
  },
  reducers: {
    fetchCommon: (state) => {
      state.loading = true;
    },
    fetchCommonSuccess: (state, { payload: genres }) => {
      state.genresList = genres.genres;
      state.loading = false;
    },
    fetchCommonError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  fetchCommon,
  fetchCommonSuccess,
  fetchCommonError,
} = commonSlice.actions;
export const selectGenresList = (state) => state.common.genresList;
export const selectLoading = (state) => state.common.loading;

export default commonSlice.reducer;

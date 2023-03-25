import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: "All",
  loading: true,
  repos: [],
  error: null,
};

export const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    getReposLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    selectedLanguageAction: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },

    getRepoSuccessAction: (state, action: PayloadAction<[]>) => {
      state.repos = action.payload;
    },

    setReposErrorActiom: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  getReposLoadingAction,
  selectedLanguageAction,
  getRepoSuccessAction,
  setReposErrorActiom,
} = popularSlice.actions;
export default popularSlice.reducer;

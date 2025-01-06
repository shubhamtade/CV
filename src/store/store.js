// filepath: /C:/Users/Shubham Tade/OneDrive/Desktop/Resume Website/frontEnd/src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language";
import mobileNavReducer from "./mobileNav";
const store = configureStore({
  reducer: {
    language: languageReducer,
    mobileNav: mobileNavReducer,
  },
});

export default store;

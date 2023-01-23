import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language";
import mobileNavReducer from "./mobileNav";
import fxReducer from "./fxControl";
const store = configureStore({
  reducer: {
    language: languageReducer,
    mobileNav: mobileNavReducer,
    fx: fxReducer,
  },
});

export default store;

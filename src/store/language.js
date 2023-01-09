import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLanguage = createAction("SET_LANGUAGE");

const initialState = {
  language: "",
};

const languageReducer = createReducer(initialState, {
  [setLanguage]: (state, action) => {
    return { language: action.payload };
  },
});

export default languageReducer;

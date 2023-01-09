import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMobileNav = createAction("SET_MOBILENAV");

const initialState = false;

const mobileNavReducer = createReducer(initialState, {
  [setMobileNav]: (state, action) => {
    return action.payload;
  },
});

export default mobileNavReducer;

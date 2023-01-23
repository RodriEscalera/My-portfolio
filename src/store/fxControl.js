import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFX = createAction("SET_FX");

const initialState = null;

const fxReducer = createReducer(initialState, {
  [setFX]: (state, action) => action.payload,
});

export default fxReducer;

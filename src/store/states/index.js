import { createAction, createReducer } from "@reduxjs/toolkit";

const DRINKS_URL = "http://localhost:4000";
const API = "https://servicodados.ibge.gov.br/api/v1/";
const INITIAL_STATE = {
  items: [],
  stateItem: null,
  error: null,
};

// Actions
export const loadedAllStatesSuccess = createAction("LOADED_ALL_DRINKS_SUCCESS");
export const loadedStateSuccess = createAction("LOADED_DRINK_SUCCESS");
export const loadStatesError = createAction("LOAD_DRINKS_ERROR");
export const getStateItem = createAction("GET_DRINK_ITEM");

// Fetchs
export const fetchStates = () => {
  return (dispatch) => {
    return fetch(`${API}/localidades/estados`)
      .then((res) => res.json())
      .then((data) => dispatch(loadedAllStatesSuccess(data)))
      .catch((error) => dispatch(loadStatesError(error)));
  };
};

export const fetchStateById = (id) => {
  return (dispatch) => {
    return fetch(`${DRINKS_URL}/states/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(loadedStateSuccess(data)))
      .catch((error) => dispatch(loadStatesError(error)));
  };
};

export default createReducer(INITIAL_STATE, {
  [loadedAllStatesSuccess]: (state, action) => ({
    ...state,
    items: action.payload,
  }),
  [loadedStateSuccess]: (state, action) => ({
    ...state,
    stateItem: action.payload,
  }),
  [loadStatesError]: (state, action) => ({ ...state, error: action.payload }),
  [getStateItem]: (state, action) => ({
    ...state,
    stateItem: selectedItem(state, action.payload),
  }),
});

export function selectedItem(state, id) {
  return state.items.find((item) => item.id === id);
}

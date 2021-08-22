import { createAction, createReducer } from "@reduxjs/toolkit";

const API = "https://servicodados.ibge.gov.br/api/v1/";
const INITIAL_STATE = {
  items: [],
  stateItem: [],
  error: null,
};

// Actions
export const loadedAllStatesSuccess = createAction("LOADED_ALL_STATES_SUCCESS");
export const loadedStateSuccess = createAction("LOADED_STATE_SUCCESS");
export const loadStatesError = createAction("LOAD_STATES_ERROR");
export const getStateItem = createAction("GET_STATE_ITEM");

// Fetchs
export const fetchStates = () => {
  return (dispatch) => {
    return fetch(`${API}/localidades/estados`)
      .then((res) => res.json())
      .then((data) => dispatch(loadedAllStatesSuccess(data)))
      .catch((error) => dispatch(loadStatesError(error)));
  };
};

export const fetchStateById = (uf) => {
  return (dispatch) => {
    return fetch(`${API}/localidades/estados/${uf}/municipios`)
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
});

export function selectedItem(state, id) {
  return state.items.find((item) => item.id === id);
}

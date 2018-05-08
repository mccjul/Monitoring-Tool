import { SET_CLIENT, SET_SYSTEM } from "../Constants";

export const setClient = (client: String) => {
  return (dispatch: Function) => {
    dispatch({ type: SET_CLIENT, payload: client });
  };
};

export const setSystem = (system: String) => {
  return (dispatch: Function) => {
    dispatch({ type: SET_SYSTEM, payload: system });
  };
};

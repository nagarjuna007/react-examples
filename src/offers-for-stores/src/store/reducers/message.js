import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  message: ""
};

const message = (state, action) => {
  return updateObject(state, {
    message:action.message
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GLOBAL_MESSAGE:
      return message(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  error: null,
  loading: false
};

const addComplaint = (state, action) => {
  return updateObject(state, { error: action.response, loading: true });
};

const reducer = (state = initialState, action) => {
  switch (state.type) {
    case actionTypes.ADD_COMPLAINT:
      return addComplaint(state, action);
    default:
      return state;
  }
};

export default reducer;

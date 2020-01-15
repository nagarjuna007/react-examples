import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  error: null,
  loading: false,
  response: []
};

const complaintsList = (state, action) => {
  return updateObject(state, { response: action.response, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMPLAINTS:
      return complaintsList(state, action);
    default:
      return state;
  }
};

export default reducer;

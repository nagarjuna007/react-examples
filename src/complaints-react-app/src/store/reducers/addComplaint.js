import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  error: null,
  loading: false,
  message: null,
  response:null
};

const addComplaint = (state, action) => {
  return updateObject(state, { error: action.response, loading: true });
};
const complaintSuccess = (state, action) => {
  return updateObject(state, { response: action.response, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMPLAINT:
      return addComplaint(state, action);
    case actionTypes.ADD_COMPLAINT_SUCCESS:
      return complaintSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;

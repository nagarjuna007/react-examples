import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  error: null,
  loading: false,
  message: null
};

const addComplaint = (state, action) => {
  return updateObject(state, { error: action.response, loading: true });
};
const addComplaintSuccess = (state, action) => {
  return updateObject(state, { message: action.response, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (state.type) {
    case actionTypes.ADD_COMPLAINT:
      return addComplaint(state, action);
    case actionTypes.ADD_COMPLAINT_SUCCESS:
      return addComplaintSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;

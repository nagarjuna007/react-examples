import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  data: []
};

const editProfile = (state, action) => {
  return updateObject(state, { data: action.data });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_PROFILE:
      return editProfile(state, action);
    default:
      return state;
  }
};

export default reducer;

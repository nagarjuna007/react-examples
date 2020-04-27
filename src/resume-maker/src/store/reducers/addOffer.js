import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  message: null,
  response:null
};

const addOffer = (state, action) => {
  return "reducer";
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_OFFER:
      return addOffer(state, action);
    default:
      return state;
  }
};

export default reducer;
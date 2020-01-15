import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getComplaints = response => {
  return {
    type: actionTypes.GET_COMPLAINTS,
    response: response
  };
};

export const getComplaintsList = () => {
  return dispatch => {
    let url = "https://compliant-210b6.firebaseio.com/compliant.json";
    axios
      .get(url)
      .then(response => {
        dispatch(getComplaints(response));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addComplaintStart = () => {
  return {
    type: actionTypes.ADD_COMPLAINT
  };
};
export const addComplaintSuccess = response => {
  return {
    type: actionTypes.ADD_COMPLAINT_SUCCESS,
    response: response
  };
};

export const addComplaintAction = (
  complaintTitle,
  complaintlocation,
  complaintDescription
) => {
  return dispatch => {
    dispatch(addComplaintStart());
    const complaintData = {
      complaintTitle: complaintTitle,
      complaintlocation: complaintlocation,
      complaintDescription: complaintDescription
    };
    let url = "https://compliant-210b6.firebaseio.com/compliant.json";
    axios
      .post(url, complaintData)
      .then(response => {
        dispatch(addComplaintSuccess(response.statusText));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addComplaintStart = () => {
  return {
    type: actionTypes.ADD_COMPLAINT
  };
};
export const addComplaintSuccess = message => {
  return {
    type: actionTypes.ADD_COMPLAINT_SUCCESS,
    message: message
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
    axios.post(url, complaintData).then(response => {
      console.log(response);
      dispatch(addComplaintSuccess(response));
    });
  };
};

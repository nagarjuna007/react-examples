import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addComplaintStart = () => {
  return {
    type: actionTypes.ADD_COMPLAINT
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
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCR3ByaXb-AUYojWDRMK48HBWz92xuzC6M";
    axios.post(url, complaintData).then(response => {
      console.log(response);
    });
  };
};

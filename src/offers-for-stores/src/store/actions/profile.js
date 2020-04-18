import * as actionTypes from "./actionTypes";
import axios from "axios";

export const profileDetails = () => {
  return dispatch => {
    let url = "https://compliant-210b6.firebaseio.com/profile.json";
    axios
      .get(url)
      .then(response => {
      //  console.log(response);
        const profile = [];
        for (let key in response.data) {
          profile.push({
            ...response.data[key],
            id: key
          });
        }
       // console.log(profile);
        dispatch(editProfile(profile[0].submitData));
        dispatch(profileInfo(profile[0].submitData));
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  };
};

export const editProfile = responseData => {
  return {
    type: actionTypes.EDIT_PROFILE,
    data: responseData
  };
};

export const profileInfo = responseData => {
  return {
    type: actionTypes.PROFILE_DETAILS,
    data: responseData
  };
};

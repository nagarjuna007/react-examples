import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  firstName: "",
  lastName: "",
  preferedLocation: "",
  primarySkills: "",
  profileDescription: "",
  projects: "",
  releventExperence: "",
  resumeTitle: "",
  secondarySkills: "",
  totalExperience: ""
};

const profileInfo = (state, action) => {
  return updateObject(state, {
    firstName: action.data.firstName,
    lastName: action.data.lastName,
    preferedLocation: action.data.preferedLocation,
    primarySkills: action.data.primarySkills,
    profileDescription: action.data.profileDescription,
    projects: action.data.projects,
    releventExperence: action.data.releventExperence,
    resumeTitle: action.data.resumeTitle,
    secondarySkills: action.data.secondarySkills,
    totalExperience: action.data.totalExperience
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_DETAILS:
      return profileInfo(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "./actionTypes";

export const message = (
  message
) => {
  return {
    type: actionTypes.GLOBAL_MESSAGE,
    message: message
  };
};
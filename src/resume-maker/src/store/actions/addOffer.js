import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addOfferAction = () => {
  return {
    type: actionTypes.ADD_OFFER
  };
};

import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER } from "../actionTypes";

const url = domain + "/users";

export const getUser = userName => dispatch => {
  dispatch({
    type: GETUSER.START
  });

  return fetch(url + "/" + userName, {
    method: "GET",
    headers: jsonHeaders
    // body: JSON.stringify(userName)   // - this isn't on the demo
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

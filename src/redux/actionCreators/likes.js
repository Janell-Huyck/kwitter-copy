import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { LIKEMESSAGE } from "../actionTypes";
import { UNLIKEMESSAGE } from "../actionTypes";

const url = domain + "/likes";

export const likeMessage = messageId => dispatch => {
  dispatch({
    type: LIKEMESSAGE.START
  });

  const token = JSON.parse(localStorage.login).result.token;

  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: "Bearer " + token },
    body: JSON.stringify(messageId)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LIKEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: LIKEMESSAGE.FAIL, payload: err }));
    });
};

export const unlikeMessage = likeId => dispatch => {
  dispatch({
    type: UNLIKEMESSAGE.START
  });

  const token = JSON.parse(localStorage.login).result.token;
  return fetch(url + `/` + likeId, {
    method: "DELETE",
    headers: { ...jsonHeaders, Authorization: "Bearer " + token }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UNLIKEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UNLIKEMESSAGE.FAIL, payload: err })
      );
    });
};

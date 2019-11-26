import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  DELETEMESSAGE,
  GETMESSAGES,
  POSTMESSAGE,
  GETSPECIFICUSERMESSAGES
} from "../actionTypes";

const url = domain + "/messages";

export const deleteMessage = messageId => dispatch => {
  dispatch({
    type: DELETEMESSAGE.START
  });
  return fetch(url + `/${messageId}`, {
    method: "DELETE",
    headers: jsonHeaders,
    body: JSON.stringify(messageId)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETEMESSAGE.FAIL, payload: err })
      );
    });
};
//kwitter-api.herokuapp.com/messages?limit=100&offset=0&username=test
export const getMessages = () => dispatch => {
  dispatch({
    type: GETMESSAGES.START
  });
  return fetch(url + "?limit=30", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETMESSAGES.FAIL, payload: err }));
    });
};

export const getSpecificUserMessages = userId => dispatch => {
  dispatch({
    type: GETSPECIFICUSERMESSAGES.START
  });
  return fetch(url + "?limit=100&offset=0&username=" + userId, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETSPECIFICUSERMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETSPECIFICUSERMESSAGES.FAIL, payload: err })
      );
    });
};

export const postMessage = messageData => dispatch => {
  dispatch({
    type: POSTMESSAGE.START
  });

  const token = JSON.parse(localStorage.login).result.token;

  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: "Bearer " + token },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTMESSAGE.FAIL, payload: err }));
    });
};

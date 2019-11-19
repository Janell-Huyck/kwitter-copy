import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  DELETEMESSAGE,
  GETMESSAGELIST,
  GETONEMESSAGE,
  POSTMESSAGE
} from "../actionTypes";

const url = domain + "/messages";
const messageId = "test-message-id"; //
const messageData = "test-message-data";

//*********************************** */
//messageId needs to be determined still
//messageData needs to be determined still
//************************************ */

export const deleteMessage = messageData => dispatch => {
  dispatch({
    type: DELETEMESSAGE.START
  });
  return fetch(url + `/${messageId}`, {
    method: "DELETE",
    headers: jsonHeaders,
    body: JSON.stringify(messageData)
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

export const getMessageList = messageData => dispatch => {
  dispatch({
    type: GETMESSAGELIST.START
  });
  return fetch(url, {
    method: "GET",
    headers: jsonHeaders,
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETMESSAGELIST.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETMESSAGELIST.FAIL, payload: err })
      );
    });
};
export const getOneMessage = messageId => dispatch => {
  dispatch({
    type: GETONEMESSAGE.START
  });
  return fetch(url + `/${messageId}`, {
    method: "GET",
    headers: jsonHeaders,
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETONEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETONEMESSAGE.FAIL, payload: err })
      );
    });
};
export const postMessage = messageData => dispatch => {
  dispatch({
    type: POSTMESSAGE.START
  });
  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
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

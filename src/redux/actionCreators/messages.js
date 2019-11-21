import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  DELETEMESSAGE,
  GETMESSAGELIST,
  GETONEMESSAGE,
  POSTMESSAGE
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
export const getMessageList = messageData => dispatch => {
  dispatch({
    type: GETMESSAGELIST.START
  });
  return fetch(url + "?limit=30", {
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
    body: JSON.stringify(messageId)
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
  //********************************************************
  //
  //     the token below is hard coded until we can figure out how to
  //      dynamically get the token from the Redux store.  a token HAS to
  //      accompany all message posts.
  //
  //**********************************************************
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1NzQzMzUzODAsImV4cCI6MTU3NDQyMTc4MH0.nt6Yp6daziuZ6HXZsh4emkEhXPmoQsr10jum4Nej4qM";
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

import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, POSTUSER, DELETEUSER, LOGOUT } from "../actionTypes";
import { login } from "./auth";
import { push } from "connected-react-router";

const url = domain + "/users";

export const getUser = userName => dispatch => {
  dispatch({
    type: GETUSER.START
  });

  return fetch(url + "/" + userName, {
    method: "GET",
    headers: jsonHeaders
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

const _postUser = registerData => dispatch => {
  dispatch({ type: POSTUSER.START });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTUSER.FAIL, payload: err }));
    });
};

export const postUser = registerData => (dispatch, getState) => {
  return dispatch(_postUser(registerData))
    .then(() =>
      dispatch(
        login({
          username: registerData.username,
          password: registerData.password
        })
      )
    )
    .then(() => {
      // const username = getState().auth.login.result.username;
      return dispatch(push("/"));
    });
};

export const deleteUser = () => (dispatch, getState) => {
  dispatch({ type: DELETEUSER.START });

  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    })
    .then(() => {
      return dispatch({
        type: LOGOUT.SUCCESS,
        payload: { statusCode: 200 }
      });
    });
};

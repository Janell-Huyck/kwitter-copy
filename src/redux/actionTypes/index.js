// import { create } from "domain";
//
//
//**********************************************
//I'm not sure why import {create} is here but it's breaking the program LOL!
//******************************************** */ * /

const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

//auth
export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
//messages
export const DELETEMESSAGE = createActionTypes("DELETEMESSAGE");
export const GETMESSAGES = createActionTypes("GETMESSAGES");
export const GETSPECIFICUSERMESSAGES = createActionTypes(
  "GETSPECIFICUSERMESSAGES"
);
export const GETONEMESSAGE = createActionTypes("GETONEMESSAGE");
export const POSTMESSAGE = createActionTypes("POSTMESSAGE");
//likes
export const LIKEMESSAGE = createActionTypes("LIKEMESSAGE");
export const UNLIKEMESSAGE = createActionTypes("UNLIKEMESSAGE");
//users
export const GETUSER = createActionTypes("GETUSER");
export const POSTUSER = createActionTypes("POSTUSER");
export const DELETEUSER = createActionTypes("DELETEUSER");

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

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
export const DELETEMESSAGE = createActionTypes("DELETEMESSAGE");
export const GETMESSAGELIST = createActionTypes("GETMESSAGELIST");
export const GETONEMESSAGE = createActionTypes("GETONEMESSAGE");
export const POSTMESSAGE = createActionTypes("POSTMESSAGE");

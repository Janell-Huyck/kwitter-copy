// hey group - this is copied from login.js and is intended as a sample to model
//what we might want to do with our reducers.

import { GETMESSAGELIST } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const getMessageList = (state = initialState, action) => {
  switch (action.type) {
    case GETMESSAGELIST.SUCCESS:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default withAsyncReducer(GETMESSAGELIST, getMessageList);

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

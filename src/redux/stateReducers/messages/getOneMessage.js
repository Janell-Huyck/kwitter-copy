import { GETONEMESSAGE } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const getOneMessage = (state = initialState, action) => {
  switch (action.type) {
    case GETONEMESSAGE.SUCCESS:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default withAsyncReducer(GETONEMESSAGE, getOneMessage);

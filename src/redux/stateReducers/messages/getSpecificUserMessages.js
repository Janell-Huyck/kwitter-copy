import { GETSPECIFICUSERMESSAGES } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const getSpecificUserMessages = (state = initialState, action) => {
  switch (action.type) {
    case GETSPECIFICUSERMESSAGES.SUCCESS:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default withAsyncReducer(
  GETSPECIFICUSERMESSAGES,
  getSpecificUserMessages
);

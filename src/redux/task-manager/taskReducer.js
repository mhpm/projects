import DATA from "./taskData";
import {
  UPDATE_DATA_START,
  UPDATE_DATA_FAILURE,
  UPDATE_DATA_SUCCESS,
} from "./taskTypes";

const INITIAL_STATE = {
  data: DATA,
  card: null,
  isFetching: false,
  errorMessage: undefined,
};

const taskManagerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case UPDATE_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case "SET_CARD":
      return {
        ...state,
        card: action.payload,
      };
    default:
      return state;
  }
};

export default taskManagerReducer;

import TASK_LIST from "./taskList";
import {
  UPDATE_TASK_LIST_START,
  UPDATE_TASK_LIST_FAILURE,
  UPDATE_TASK_LIST_SUCCESS,
} from "./taskTypes";

const INITIAL_STATE = {
  taskList: TASK_LIST,
  task: null,
  isFetching: false,
  errorMessage: undefined,
};

const taskManagerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TASK_LIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_TASK_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        taskList: action.payload,
      };
    case UPDATE_TASK_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case "SET_TASK":
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
};

export default taskManagerReducer;

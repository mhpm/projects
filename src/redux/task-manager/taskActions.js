import {
  UPDATE_TASK_LIST_START,
  UPDATE_TASK_LIST_FAILURE,
  UPDATE_TASK_LIST_SUCCESS,
} from "./taskTypes";

export const updateTaskListStartAsync = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_TASK_LIST_START,
  });

  try {
    dispatch({
      type: UPDATE_TASK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TASK_LIST_FAILURE,
      payload: error.message,
    });
  }
};

export const setTask = (task) => ({
  type: "SET_TASK",
  payload: task,
});

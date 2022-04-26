import {
  UPDATE_DATA_START,
  UPDATE_DATA_FAILURE,
  UPDATE_DATA_SUCCESS,
} from "./taskTypes";

export const updateDataStartAsync = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_DATA_START,
  });

  try {
    dispatch({
      type: UPDATE_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const setCard = (card) => ({
  type: "SET_CARD",
  payload: card,
});

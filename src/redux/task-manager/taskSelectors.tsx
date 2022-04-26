import { RootState } from "redux/root-reducer";

export const selectTaskData = ((state: RootState) => state.taskData);

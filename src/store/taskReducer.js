import { taskUpdated, taskDelete } from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;
    }
    case taskDelete: {
      const array = [...state];
      const remainingTasks = array.filter(
        (item) => item.id !== action.payload.id
      );
      return remainingTasks;
    }
    default:
      return state;
  }
}

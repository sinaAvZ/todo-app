import { taskProp } from "../types/Api";

export const setTasksToLocalStorage = (tasks: taskProp[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

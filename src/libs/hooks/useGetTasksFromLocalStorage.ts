"use client";
import { useEffect, useState } from "react";
import { taskProp  } from "../types/Api";
import { useAtom } from "jotai";
import { tasks } from "../state-management/states/taskManagementStates";

export const useGetTasksFromLocalStorage = (): taskProp[] => {
  const [newTasks, useSetTasks] = useAtom<taskProp[]>(tasks);

  useEffect(() => {
    const localStorageTasks = localStorage.getItem("tasks");
    if (localStorageTasks) {
      const tasks: taskProp[] = JSON.parse(localStorageTasks);

      useSetTasks(tasks);
    }
  }, []);
  return newTasks;
};

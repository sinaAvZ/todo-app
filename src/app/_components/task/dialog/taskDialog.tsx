"use client";
import { Button } from "@mui/joy";
import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { useAtom } from "jotai";
import { tasks } from "@/libs/state-management/states/taskManagementStates";
import { setTasksToLocalStorage } from "@/libs/helpers/setTasksToLocalStorage";
import { taskProp } from "@/libs/types/Api";

type TaskDialogProps = {
  task: taskProp;
  isDelete?: boolean;
};

export const TaskDialog = ({ task, isDelete }: TaskDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [prevTasks, setNewTasks] = useAtom(tasks);

  const handleClickOpen = (e: SyntheticEvent) => {
    e.stopPropagation;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = (e: SyntheticEvent) => {
    e.stopPropagation;
    let updatedTasks;

    if (isDelete) {
      updatedTasks = prevTasks.filter((t) => t.id !== task.id);
    } else {
      updatedTasks = prevTasks.map((t) =>
        t.id === task.id ? { ...t, isDone: true } : t
      );
    }

    setNewTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks);
    handleClose();
  };

  return (
    <>
      <Button
        sx={{ background: isDelete ? "#D32F2F" : "primary.main" }}
        onClick={handleClickOpen}>
        {isDelete ? "Delete Task" : "Done Task"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle
          color={isDelete ? "error.main" : "primary.main"}
          id="alert-dialog-title">
          Are you sure you want to {isDelete ? "DELETE" : "MARK AS DONE"} this
          task?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

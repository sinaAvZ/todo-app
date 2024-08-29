"use client";
import { setTasksToLocalStorage } from "@/libs/helpers/setTasksToLocalStorage";
import { taskSchema } from "@/libs/schema";
import { tasks } from "@/libs/state-management/states/taskManagementStates";
import { taskProp } from "@/libs/types/Api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Typography } from "@mui/joy";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { useAtom } from "jotai";
import React, { SyntheticEvent, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type NewOrEditTaskDialogProps = {
  isEdit?: boolean;
  taskToEdit?: taskProp;
};

export const NewOrEditTaskDialog = ({
  isEdit = false,
  taskToEdit,
}: NewOrEditTaskDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [prevTasks, setNewTasks] = useAtom(tasks);

  const handleClickOpen = (e:SyntheticEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: taskToEdit?.title || "",
      description: taskToEdit?.description || "",
    },
  });

  // Update form values when switching to edit mode with a specific task
  useEffect(() => {
    if (isEdit && taskToEdit) {
      form.reset({
        title: taskToEdit.title,
        description: taskToEdit.description,
      });
    }
  }, [isEdit, taskToEdit, form]);

  const onSubmit = (data: z.infer<typeof taskSchema>) => {
    let updatedTasks: taskProp[];

    if (isEdit && taskToEdit) {
      updatedTasks = prevTasks.map((task:taskProp) =>
        task.id === taskToEdit.id ? { ...task, ...data } : task
      );
    } else {
      updatedTasks = [
        ...prevTasks,
        { ...data, id: String(Date.now()), isDone: false },
      ];
    }

    setNewTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks);
    handleClose();
  };

  return (
    <>
      <Button className="h-fit" onClick={handleClickOpen} variant="solid">
        {isEdit ? "Edit" : "+"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogContent>
            <Controller
              name="title"
              control={form.control}
              render={({ field }) => (
                <>
                  <Input className="my-2" placeholder="Title" {...field} />
                  {form.formState.errors.title && (
                    <Typography color="danger">
                      {form.formState.errors.title.message?.toUpperCase()}
                    </Typography>
                  )}
                </>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field }) => (
                <>
                  <Input
                    className="my-2"
                    placeholder="Description"
                    {...field}
                  />
                  {form.formState.errors.description && (
                    <Typography color="danger">
                      {form.formState.errors.description.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" autoFocus>
              {isEdit ? "Save" : "Create"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

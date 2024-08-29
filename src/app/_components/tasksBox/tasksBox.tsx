import React from "react";
import {
  Container,
  Typography,
} from "@mui/material";
import { Task } from "../";
import { NewOrEditTaskDialog } from "../newOrEditTaskDialog";
import { taskProp } from "@/libs/types/Api";

type taskBoxProps = {
  isOnProgress?: boolean;
  title: string;
  tasks: taskProp[];
};
export const TasksBox = ({ title, isOnProgress, tasks }: taskBoxProps) => {
  return (
    <Container sx={{ bgcolor: "background.paper", paddingX: 1, paddingY: 2 }}>
      <div className="flex items-center justify-between">
        <Typography fontWeight={"800"}>{title}</Typography>
        {isOnProgress && <NewOrEditTaskDialog />}
      </div>
      
      {tasks.map((item) => (
        <Task {...item} key={item.id} />
      ))}
    </Container>
  );
};

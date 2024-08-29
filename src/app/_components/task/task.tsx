import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { TaskDialog } from "./dialog/taskDialog";
import { Typography } from "@mui/material";
import { NewOrEditTaskDialog } from "../newOrEditTaskDialog";
import { taskProp } from "@/libs/types/Api";

export const Task: React.FC<taskProp> = (task) => {
  return (
    <Accordion>
      <AccordionSummary>
        <div className="flex w-full items-center justify-between">
          <Typography color="primary.main">{task.title}</Typography>
          <NewOrEditTaskDialog isEdit taskToEdit={task} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="secondary.main">{task.description}</Typography>
        <div className="flex justify-between">
          {!task.isDone && <TaskDialog task={task} />}
          <TaskDialog task={task} isDelete />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

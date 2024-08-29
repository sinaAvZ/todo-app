"use client";
import { Container } from "@mui/joy";
import { Grid2 } from "@mui/material";
import { TasksBox, Header } from "./_components";
import { useGetTasksFromLocalStorage } from "@/libs/hooks/useGetTasksFromLocalStorage";

export default function Home() {
  //we have to use ssr but as you know we are using local storage
  const tasks = useGetTasksFromLocalStorage();

  return (
    <Container fixed className="py-16">
      <Header />
      <Grid2 container spacing={6} p={2}>
        <Grid2 size={{ lg: 4, md: 6, sm: "grow" }}>
          <TasksBox
            tasks={tasks.filter((task) => !task.isDone)}
            isOnProgress
            title="On progress tasks"
          />
        </Grid2>
        <Grid2 size={{ lg: 4, md: 6, sm: "grow" }}>
          <TasksBox
            tasks={tasks.filter((task) => task.isDone)}
            title="Done tasks"
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}

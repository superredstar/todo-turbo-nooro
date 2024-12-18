"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import type { Task } from "@repo/db-prisma";
import { tasksService } from "../services/tasks.service";

type TaskContextType = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  setTasks: () => []
});

const TaskContextProvider = (props: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    tasksService.getTasks().then(setTasks).catch((err_msg: string) => {
      alert(err_msg);
    }).finally(() => {});
  }, []);
  return (
    <TaskContext.Provider value={{
      tasks,
      setTasks
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export { type TaskContextType, TaskContext, TaskContextProvider };

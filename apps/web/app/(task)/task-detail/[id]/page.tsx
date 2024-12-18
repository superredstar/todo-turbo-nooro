"use client"

import { useParams, useRouter } from "next/navigation";
import { TodoForm } from "../../../../components/task/task-form";
import { tasksService } from "../../../../services/tasks.service";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../../../contexts/task.context";
import { Task } from "@repo/db-prisma";

export default function TaskDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { tasks, setTasks } = useContext(TaskContext);
  const [task, setTask] = useState<Task | null | undefined>(null);
  const updateTaskHandler = (title: string, color: string) => {
    const taskId = Number(id);
    if (isNaN(taskId)) {
      alert('Id is wrong');
    } else {
      tasksService.updateTask(taskId, { title, color }).then((updated) => {
        setTasks((_prev) => _prev.map((task) => task.id === taskId ? updated : task));
        router.push('/');
      }).catch((err_msg) => {
        alert(err_msg);
      });
    }
  }
  useEffect(() => {
    const taskId = Number(id);
    setTask(tasks.filter((task) => task.id === taskId)[0]);
  }, [tasks, id]);
  if (task) {
    return (
      <TodoForm type="update" title={task.title} color={task.color} className="mt-12" onSubmit={updateTaskHandler} />
    )
  } else if (task === undefined) {
    return (
      <p>Id is wrong</p>
    )
  } else {
    return (
      <p>Loading</p>
    )
  }
}
"use client"

import { useRouter } from "next/navigation";
import { TodoForm } from "../../../components/task/task-form";
import { tasksService } from "../../../services/tasks.service";

export default function TodoAdd() {
  const router = useRouter();
  const addTaskHandler = (title: string, color: string) => {
    tasksService.addTask({ title, color }).then(() => {
      router.push('/');
    }).catch((err_msg) => {
      alert(err_msg);
    });
  }
  return (
    <TodoForm type="create" className="mt-12" onSubmit={addTaskHandler} />
  )
}
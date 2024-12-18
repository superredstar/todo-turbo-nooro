'use client';

import { Button } from "@repo/ui/button";
import { Badge } from "@repo/ui/badge";
import { IcPlusCircle } from "../../../packages/icon/src/ic-plus-circle";
import { EmptyTaskList } from "../components/task-list/empty-task-list";
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from "react";
import { tasksService } from "../services/tasks.service";
import { TaskItem } from "../components/task-list/task-item";
import { TaskContext } from "../contexts/task.context";

export default function TodoList() {
  const router = useRouter();
  const { tasks, setTasks } = useContext(TaskContext);
  const [countOfCompleted, setCountOfCompleted] = useState<number>(0);
  const createTaskHandler = () => {
    router.push('/task-add');
  }
  const completeTaskHandler = (id: number, prevCompleted: boolean, newCompleted: boolean) => {
    setTasks((_prev) => _prev.map((task) => task.id === id ? ({ ...task, completed: newCompleted }) : task));
    tasksService.updateTask(id, { completed: newCompleted }).catch((err_msg) => {
      setTasks((_prev) => _prev.map((task) => task.id === id ? ({ ...task, completed: prevCompleted }) : task));
      alert(err_msg);
    });
  }
  const editTaskHandler = (id: number) => {
    router.push(`/task-detail/${id}`);
  }
  const deleteTaskHandler = (id: number) => {
    tasksService.deleteTask(id).then((deleted) => {
      setTasks((_prev) => _prev.filter((task) => task.id !== deleted.id));
    }).catch((err_msg) => {
      alert(err_msg);
    });
  }
  useEffect(() => {
    setCountOfCompleted(tasks.filter((task) => task.completed).length);
  }, [tasks]);
  return (
    <main className="w-full -mt-6.5 mb-6.5">
      <div className="flex flex-col gap-14 w-184 mx-auto">
        <Button className="w-full h-13 bg-primary hover:bg-primary-1 transition-all" onClick={createTaskHandler}>
          <span className="font-inter font-bold text-sm text-white">Create Task</span>
          <IcPlusCircle size={16} color="#F2F2F2" />
        </Button>
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-inter font-bold text-todo text-sm leading-4.25">Tasks</span>
              <Badge>
                <span className="font-inter font-bold text-badge text-xs leading-3.5">{tasks.length}</span>
              </Badge>
            </div>
            <div className="flex items-center gap-2">
            <span className="font-inter font-bold text-complete text-sm leading-4.25">Completed</span>
              <Badge>
                <span className="font-inter font-bold text-badge text-xs leading-3.5">{tasks.length === 0 ? '0' : `${countOfCompleted} de ${tasks.length}`}</span>
              </Badge>
            </div>
          </div>
          {tasks.length > 0 ? (
            <div className="w-full flex flex-col gap-3">
              {tasks.map((task, id) => (
                <TaskItem
                  key={id}
                  task={task}
                  onComplete={(completed) => completeTaskHandler(task.id, task.completed, completed)}
                  onEdit={() => editTaskHandler(task.id)}
                  onDelete={() => deleteTaskHandler(task.id)}
                />
              ))}
            </div>
          ) : <EmptyTaskList />}
        </div>
      </div>
    </main>
  );
}

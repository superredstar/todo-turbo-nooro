import { AxiosError, AxiosInstance } from "axios";
import api from "./_api";
import { Task } from "@repo/db-prisma";

class TasksService {
  private prefix: string = '/tasks';
  private api: AxiosInstance;
  constructor(_api: AxiosInstance) {
    this.api = _api;
  }
  addTask(data: Pick<Task, 'title' | 'color'>) {
    return new Promise<Task>((resolve, reject) => {
      this.api.post(this.prefix, data).then((res: { data: Task }) => {
        resolve(res.data);
      }).catch((err: AxiosError<{ message: string; error: string; statusCode: number; }>) => {
        if (err.response) {
          reject(err.response.data.message);
        } else {
          reject(err.message);
        }
      });
    });
  }
  getTasks() {
    return new Promise<Task[]>((resolve, reject) => {
      this.api.get(this.prefix).then((res: { data: Task[] }) => {
        resolve(res.data);
      }).catch((err: AxiosError<{ message: string; error: string; statusCode: number; }>) => {
        if (err.response) {
          reject(err.response.data.message);
        } else {
          reject(err.message);
        }
      });
    })
  }
  updateTask(id: number, data: Partial<Task>) {
    return new Promise<Task>((resolve, reject) => {
      this.api.put(this.prefix + `/${id}`, data).then((res: { data: Task }) => {
        resolve(res.data);
      }).catch((err: AxiosError<{ message: string; error: string; statusCode: number; }>) => {
        if (err.response) {
          reject(err.response.data.message);
        } else {
          reject(err.message);
        }
      });
    })
  }
  deleteTask(id: number) {
    return new Promise<Task>((resolve, reject) => {
      this.api.delete(this.prefix + `/${id}`).then((res: { data: Task }) => {
        resolve(res.data);
      }).catch((err: AxiosError<{ message: string; error: string; statusCode: number; }>) => {
        if (err.response) {
          reject(err.response.data.message);
        } else {
          reject(err.message);
        }
      });
    })
  }
}

export const tasksService = new TasksService(api);

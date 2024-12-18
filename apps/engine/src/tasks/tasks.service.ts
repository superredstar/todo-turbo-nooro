import { Task, PrismaClient } from "@repo/db-prisma";

class TasksService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  addTask(data: Pick<Task, 'title' | 'color'>) {
    return this.prisma.task.create({
      data: data
    });
  }

  getTasks() {
    return this.prisma.task.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  updateTask(id: number, data: Partial<Task>) {
    return this.prisma.task.update({
      where: {
        id
      },
      data,
    });
  }

  deleteTask(id: number) {
    return this.prisma.task.delete({
      where: {
        id
      }
    });
  }
}

export const tasksService = new TasksService();

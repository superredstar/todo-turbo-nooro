import { Request, Response } from 'express';
import { tasksService } from './tasks.service.js';

export const getTasks = (req: Request, res: Response) => {
  tasksService.getTasks().then((tasks) => {
    res.status(200).json(tasks);
  });
}

export const addTask = (req: Request, res: Response) => {
  const task = req.body;
  tasksService.addTask(task).then((created) => {
    res.status(201).json(created);
  }).catch((err) => {
    res.status(500).json(err);
  });
}

export const updateTask = (req: Request, res: Response) => {
  const id = req.params['id'];
  const data = req.body;
  const taskId = Number(id);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID. Must be a number.' });
  }
  tasksService.updateTask(taskId, data).then((updated) => {
    setTimeout(() => {
      res.status(200).json(updated);
    }, 1000)
  }).catch((err) => {
    res.status(500).json(err);
  });
}

export const deleteTask = (req: Request, res: Response) => {
  const id = req.params['id'];
  const taskId = Number(id);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID. Must be a number.' });
  }
  tasksService.deleteTask(taskId).then((deleted) => {
    res.status(200).json(deleted);
  }).catch((err) => {
    res.status(500).json(err);
  });
}

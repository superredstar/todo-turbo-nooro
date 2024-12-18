import express from 'express';
import { addTask, deleteTask, getTasks, updateTask } from './tasks.controller.js';
import { JoiValidator } from '../_utils/joi-validator.js';
import { AddTaskSchema, UpdateTaskSchema } from './tasks.schema.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', JoiValidator(AddTaskSchema), addTask);
router.put('/:id', JoiValidator(UpdateTaskSchema), updateTask);
router.delete('/:id', deleteTask);

export default router;
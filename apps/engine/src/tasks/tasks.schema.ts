import Joi from "joi";

export const AddTaskSchema = Joi.object({
  title: Joi.string().required(),
  color: Joi.string().pattern(/^#([0-9a-fA-F]{6})$/).required()
});

export const UpdateTaskSchema = Joi.object({
  title: Joi.string().optional(),
  color: Joi.string().pattern(/^#([0-9a-fA-F]{6})$/).optional(),
  completed: Joi.bool().optional(),
});

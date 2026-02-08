import type { Request, Response } from "express";
import TodoModel from "../models/todo.model.js";

// const TODO: TodoModel[] = [];
const createTodo = async (req: Request, res: Response) => {
  try {
    const { todoId, text } = req.body;

    const todo = await TodoModel.create({
      todoId,
      text,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to create todo",error:error });
  }
};

export default createTodo;

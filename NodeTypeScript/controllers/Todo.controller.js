import { Request, Response } from "express";
import TodoModel from "../models/todo.model";

interface CreateTodoBody {
  todoId: number;
  text: string;
}

const createTodo = async (req,res) => {
  try {
    const { todoId, text } = req.body;

    if (!todoId || !text) {
      return res.status(400).json({ message: "todoId and text are required" });
    }

    const todo = await TodoModel.create({
      todoId,
      text,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

export default createTodo;

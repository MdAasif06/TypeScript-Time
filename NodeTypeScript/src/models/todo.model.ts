import mongoose, { Schema, model } from "mongoose";

export interface ITodo {
  todoId: number;
  text: string;
}

const todoSchema = new Schema<ITodo>({
  todoId: { type: Number, required: true },
  text: { type: String, required: true },
});
const todoModel = mongoose.model("Todo", todoSchema);

export default todoModel;

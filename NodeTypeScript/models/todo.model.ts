import mongoose from "mongoose";

export interface ITodo extends Document {
  todoId: number;
  text: string;
}

const todoSchema = new mongoose.Schema({
  todoId: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);
export default todoModel;

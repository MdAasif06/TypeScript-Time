import mongoose, { Schema, model } from "mongoose";
const todoSchema = new Schema({
    todoId: { type: Number, required: true },
    text: { type: String, required: true },
});
const todoModel = mongoose.model("Todo", todoSchema);
export default todoModel;
//# sourceMappingURL=todo.model.js.map
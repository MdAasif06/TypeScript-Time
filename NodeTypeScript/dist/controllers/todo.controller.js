import TodoModel from "../models/todo.model.js";
// const TODO: TodoModel[] = [];
const createTodo = async (req, res) => {
    try {
        const { todoId, text } = req.body;
        const todo = await TodoModel.create({
            todoId,
            text,
        });
        res.status(201).json(todo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create todo", error: error });
    }
};
export default createTodo;
//# sourceMappingURL=todo.controller.js.map
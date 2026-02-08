import express from "express";
import todoController from "../controllers/todo.controller.js";
const router = express.Router();
router.post("/create", todoController); //create post
//router.get("/"); //get todo
//router.patch("/:todoId"); //update todo
//router.delete("/:todoId"); //delete todo
export default router;
//# sourceMappingURL=todo.route.js.map
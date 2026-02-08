import express from "express";
import type { Request, Response, NextFunction } from "express";
import todoRoute from "./routes/todo.route.js"
import connectDB from "./config/db.js";
connectDB()


const app = express();
app.use(express.json());

app.use("/todos", todoRoute);
//middleware to handler error any other request

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
})

app.use("/",(req,res)=>{
  res.send("working")
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});

import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import petRouter from "./routes/pet.route.js";
const app: Express = express();
app.use(cors());

app.use("/api", petRouter);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "working server" });
});
app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: "no route found" });
});

const PORT = 3030;
app.listen(PORT, (): void => {
  console.log(`server is running ${PORT}`);
});

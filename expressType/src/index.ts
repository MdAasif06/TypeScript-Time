import express from "express";
import type { Express,Request,Response } from "express";
import cors from "cors"
import { pets } from "./data/pet.js";

const app: Express = express();
app.use(cors())

app.get("/", (req:Request, res:Response):void => {
  res.json(pets);
});

app.use((req:Request,res:Response):void=>{
    res.status(404).json({message:"no route found"})
})

const PORT = 3030;
app.listen(PORT, (): void => {
  console.log(`server is running ${PORT}`);
});

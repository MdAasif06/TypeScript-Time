import express from "express";
import type { Express,Request,Response } from "express";
import type { Pet } from "./data/pet.js";
import cors from "cors"
import { pets } from "./data/pet.js";

const app: Express = express();
app.use(cors())

app.get("/", (req:Request, res:Response<Pet[]>):void => {
  res.json(pets);
});

app.get("/:id",(req:Request<{id:string}>,res:Response<Pet|{message:string}>):void=>{
   const {id}=req.params;
   const pet:Pet|undefined=pets.find((pet:Pet):boolean=>pet.id.toString()===id)
   if(pet){
    res.json(pet)
   }
   else{
    res.status(404).json({message:"No pet available of this id"})
   }
})


app.use((req:Request,res:Response<{message:string}>):void=>{
    res.status(404).json({message:"no route found"})
})

const PORT = 3030;
app.listen(PORT, (): void => {
  console.log(`server is running ${PORT}`);
});

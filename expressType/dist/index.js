import express from "express";
import cors from "cors";
import { pets } from "./data/pet.js";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.json(pets);
});
app.get("/:id", (req, res) => {
    const { id } = req.params;
    const pet = pets.find((pet) => pet.id.toString() === id);
    if (pet) {
        res.json(pet);
    }
    else {
        res.status(404).json({ message: "No pet available of this id" });
    }
});
app.use((req, res) => {
    res.status(404).json({ message: "no route found" });
});
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});
//# sourceMappingURL=index.js.map
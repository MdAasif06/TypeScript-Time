import express from "express";
import cors from "cors";
import { pets } from "./data/pet.js";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.json(pets);
});
app.use((req, res) => {
    res.status(404).json({ message: "no route found" });
});
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});
//# sourceMappingURL=index.js.map
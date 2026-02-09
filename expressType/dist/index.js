import express from "express";
import cors from "cors";
import petRouter from "./routes/pet.route.js";
const app = express();
app.use(cors());
app.use("/api", petRouter);
app.get("/", (_req, res) => {
    res.status(200).json({ message: "working server" });
});
app.use((req, res) => {
    res.status(404).json({ message: "no route found" });
});
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});
//# sourceMappingURL=index.js.map
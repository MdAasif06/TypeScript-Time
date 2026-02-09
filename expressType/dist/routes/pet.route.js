import express from "express";
import { getPetById, getPets } from "../controllers/pets.controller.js";
const petRouter = express.Router();
petRouter.get("/pets", getPets);
petRouter.get("/pets/:id", getPetById);
export default petRouter;
//# sourceMappingURL=pet.route.js.map
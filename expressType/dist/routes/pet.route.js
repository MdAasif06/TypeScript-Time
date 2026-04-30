import express from "express";
import { getPetById, getPets } from "../controllers/pets.controller.js";
const petRouter = express.Router();
import { validateNumricId, pleaseAuth } from "../middlewares/pets.middleware.js";
petRouter.get("/pets", getPets);
petRouter.get("/pets/:id", pleaseAuth, validateNumricId, getPetById);
export default petRouter;
//# sourceMappingURL=pet.route.js.map
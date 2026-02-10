import express from "express";
import type { Router } from "express";
import { getPetById, getPets } from "../controllers/pets.controller.js";
const petRouter: Router = express.Router();
import {validateNumricId,pleaseAuth} from "../middlewares/pets.middleware.js"
petRouter.get("/pets", getPets);
petRouter.get("/pets/:id",pleaseAuth,validateNumricId, getPetById);

export default petRouter;

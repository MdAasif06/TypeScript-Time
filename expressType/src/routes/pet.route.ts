import express from "express";
import type { Router } from "express";
import { getPetById, getPets } from "../controllers/pets.controller.js";
const petRouter: Router = express.Router();

petRouter.get("/pets", getPets);
petRouter.get("/pets/:id", getPetById);

export default petRouter;

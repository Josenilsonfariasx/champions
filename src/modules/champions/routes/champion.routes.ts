import { Router } from "express";
import { ChampionController } from "../controllers/ChampionController.js";

const championRoutes = Router();
const championController = new ChampionController();

championRoutes.get("/", championController.listChampions);
championRoutes.get("/:id", championController.getChampionById);

export { championRoutes };

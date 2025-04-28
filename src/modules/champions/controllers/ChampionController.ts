import { Request, Response } from "express";
import { ChampionService } from "../services/ChampionService.js";

export class ChampionController {
  async listChampions(req: Request, res: Response): Promise<Response> {
    const championService = new ChampionService();
    const champions = await championService.listChampions();

    return res.json(champions);
  }

  async getChampionById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const championService = new ChampionService();
    const champion = await championService.getChampionById(id);

    return res.json(champion);
  }
}

import { ChampionService } from "../services/ChampionService.js";
export class ChampionController {
    async listChampions(req, res) {
        const championService = new ChampionService();
        const champions = await championService.listChampions();
        return res.json(champions);
    }
    async getChampionById(req, res) {
        const { id } = req.params;
        const championService = new ChampionService();
        const champion = await championService.getChampionById(id);
        return res.json(champion);
    }
}

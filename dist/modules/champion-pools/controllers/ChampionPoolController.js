import { ManageChampionPoolService } from "../services/ManageChampionPoolService.js";
export class ChampionPoolController {
    async addChampion(req, res) {
        const { teamId } = req;
        const { championId, roleId, proficiency, notes } = req.body;
        const manageChampionPoolService = new ManageChampionPoolService();
        const championPool = await manageChampionPoolService.addChampion({
            teamId,
            championId,
            roleId,
            proficiency,
            notes,
        });
        return res.status(201).json(championPool);
    }
    async updateChampion(req, res) {
        const { teamId } = req;
        const { championId, roleId, proficiency, notes } = req.body;
        const manageChampionPoolService = new ManageChampionPoolService();
        const championPool = await manageChampionPoolService.updateChampion({
            teamId,
            championId,
            roleId,
            proficiency,
            notes,
        });
        return res.json(championPool);
    }
    async removeChampion(req, res) {
        const { teamId } = req;
        const { championId, roleId } = req.params;
        const manageChampionPoolService = new ManageChampionPoolService();
        await manageChampionPoolService.removeChampion(teamId, championId, roleId);
        return res.status(204).send();
    }
    async getChampionPool(req, res) {
        const { teamId } = req;
        const manageChampionPoolService = new ManageChampionPoolService();
        const championPool = await manageChampionPoolService.getChampionPool(teamId);
        return res.json(championPool);
    }
    async getChampionPoolByRole(req, res) {
        const { teamId } = req;
        const { roleId } = req.params;
        const manageChampionPoolService = new ManageChampionPoolService();
        const championPool = await manageChampionPoolService.getChampionPoolByRole(teamId, roleId);
        return res.json(championPool);
    }
}

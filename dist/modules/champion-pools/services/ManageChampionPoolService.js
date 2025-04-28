import { PrismaClient } from "@prisma/client";
import { AppError } from "../../../shared/errors/AppError.js";
const prisma = new PrismaClient();
export class ManageChampionPoolService {
    async addChampion({ teamId, championId, roleId, proficiency, notes }) {
        const championPool = await prisma.championPool.create({
            data: {
                teamId,
                championId,
                roleId,
                proficiency,
                notes,
            },
            include: {
                champion: true,
                role: true,
            },
        });
        return championPool;
    }
    async updateChampion({ teamId, championId, roleId, proficiency, notes }) {
        const championPool = await prisma.championPool.findFirst({
            where: {
                teamId,
                championId,
                roleId,
            },
        });
        if (!championPool) {
            throw new AppError("Champion not found in pool", 404);
        }
        const updatedChampionPool = await prisma.championPool.update({
            where: {
                id: championPool.id,
            },
            data: {
                proficiency,
                notes,
            },
            include: {
                champion: true,
                role: true,
            },
        });
        return updatedChampionPool;
    }
    async removeChampion(teamId, championId, roleId) {
        const championPool = await prisma.championPool.findFirst({
            where: {
                teamId,
                championId,
                roleId,
            },
        });
        if (!championPool) {
            throw new AppError("Champion not found in pool", 404);
        }
        await prisma.championPool.delete({
            where: {
                id: championPool.id,
            },
        });
    }
    async getChampionPool(teamId) {
        const championPool = await prisma.championPool.findMany({
            where: {
                teamId,
            },
            include: {
                champion: true,
                role: true,
            },
        });
        return championPool;
    }
    async getChampionPoolByRole(teamId, roleId) {
        const championPool = await prisma.championPool.findMany({
            where: {
                teamId,
                roleId,
            },
            include: {
                champion: true,
                role: true,
            },
        });
        return championPool;
    }
}

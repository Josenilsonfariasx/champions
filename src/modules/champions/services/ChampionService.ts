import { PrismaClient } from "@prisma/client";
import { AppError } from "../../../shared/errors/AppError.js";

const prisma = new PrismaClient();

export class ChampionService {
  async listChampions() {
    const champions = await prisma.champion.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return champions;
  }

  async getChampionById(id: string) {
    const champion = await prisma.champion.findUnique({
      where: { id },
    });

    if (!champion) {
      throw new AppError("Champion not found", 404);
    }

    return champion;
  }
}

import { PrismaClient } from "@prisma/client";
import { AppError } from "../../../shared/errors/AppError.js";
import { AuthTeamService } from "../services/AuthTeamService.js";
import { CreateTeamService } from "../services/CreateTeamService.js";
const prisma = new PrismaClient();
export class AuthController {
    async register(req, res) {
        const { name, tag, logo, email, password } = req.body;
        const createTeamService = new CreateTeamService();
        const team = await createTeamService.execute({
            name,
            tag,
            logo,
            email,
            password,
        });
        return res.status(201).json(team);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const authTeamService = new AuthTeamService();
        const { team, token } = await authTeamService.execute({
            email,
            password,
        });
        return res.json({ team, token });
    }
    async me(req, res) {
        const { teamId } = req;
        const team = await prisma.team.findUnique({
            where: { id: teamId },
            select: {
                id: true,
                name: true,
                tag: true,
                email: true,
                logo: true,
            },
        });
        if (!team) {
            throw new AppError("Team not found", 404);
        }
        return res.json(team);
    }
}

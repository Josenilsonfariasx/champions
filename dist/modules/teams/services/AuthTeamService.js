import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../../shared/errors/AppError.js";
const prisma = new PrismaClient();
export class AuthTeamService {
    async execute({ email, password }) {
        const team = await prisma.team.findUnique({
            where: { email },
        });
        if (!team) {
            throw new AppError("Invalid credentials", 401);
        }
        const passwordMatch = await bcrypt.compare(password, team.password);
        if (!passwordMatch) {
            throw new AppError("Invalid credentials", 401);
        }
        const token = jwt.sign({ teamId: team.id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        return {
            team: {
                id: team.id,
                name: team.name,
                tag: team.tag,
                email: team.email,
            },
            token,
        };
    }
}

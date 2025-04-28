import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AppError } from "../../../shared/errors/AppError.js";

const prisma = new PrismaClient();

interface IRequest {
  name: string;
  tag: string;
  logo?: string;
  email: string;
  password: string;
}

interface IResponse {
  id: string;
  name: string;
  tag: string;
  email: string;
}

export class CreateTeamService {
  async execute({ name, tag, logo, email, password }: IRequest): Promise<IResponse> {
    // Check if email is already in use
    const teamWithEmail = await prisma.team.findUnique({
      where: { email },
    });

    if (teamWithEmail) {
      throw new AppError("Email already in use", 400);
    }

    // Check if tag is already in use
    const teamWithTag = await prisma.team.findUnique({
      where: { tag },
    });
    if (teamWithTag) {
      throw new AppError("Team tag already in use", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const team = await prisma.team.create({
      data: {
        name,
        tag,
        logo: logo || "https://example.com/logo.png",
        email,
        password: hashedPassword,
      },
    });

    return {
      id: team.id,
      name: team.name,
      tag: team.tag,
      email: team.email,
    };
  }
}

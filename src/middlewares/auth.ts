import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../shared/errors/AppError.js";

interface TokenPayload {
  teamId: string;
  iat: number;
  exp: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError("No token provided", 401);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    const { teamId } = data as TokenPayload;

    req.teamId = teamId;

    return next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
};

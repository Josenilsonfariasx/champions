import jwt from "jsonwebtoken";
import { AppError } from "../shared/errors/AppError.js";
export const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        throw new AppError("No token provided", 401);
    }
    const token = authorization.replace("Bearer", "").trim();
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const { teamId } = data;
        req.teamId = teamId;
        return next();
    }
    catch {
        throw new AppError("Invalid token", 401);
    }
};

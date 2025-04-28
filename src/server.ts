import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { authRoutes } from "./modules/teams/routes/auth.routes.js";
import { championPoolRoutes } from "./modules/champion-pools/routes/champion-pool.routes.js";
import { championRoutes } from "./modules/champions/routes/champion.routes.js";
import { AppError } from "./shared/errors/AppError.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/teams/:teamId/champion-pool", championPoolRoutes);
app.use("/champions", championRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

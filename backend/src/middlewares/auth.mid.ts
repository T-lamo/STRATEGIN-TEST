import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../model/user";

const JWT_SECRET = process.env.JWT_SECRET;

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, JWT_SECRET!, async (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const { username, role, exp } = decoded as {
      username: string;
      role: string;
      exp: number;
    };
    const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds

    if (exp && exp < currentTime) {
      return res.status(401).json({ message: "Token expired" });
    }

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(403).json({ message: "Forbidden" });
    }

    (req as any).user = { username, role };
    next();
  });
}

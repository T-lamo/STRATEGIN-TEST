import { Query } from "../model/query";
import { User, userModel } from "../model/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

export const userController = {
  getUsers: async (req: Request, res: Response) => {
    try {
      const users = await new Query<User>().getAll(userModel);
      const list = users.map(
        ({ username, email, password, id }) => new User({ username, email, id })
      );
      res.json(list);
    } catch (error) {
      //console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

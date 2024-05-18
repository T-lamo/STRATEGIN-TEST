import { Request, Response } from "express";
import { Paginator } from "../model/paginator";
import { Query } from "../model/query";
import { User, userModel } from "../model/user";

export const userController = {
  getUsers: async (req: Request, res: Response) => {
    try {
      const paginator = new Paginator({ ...req.body });
      const users = await new Query<User>().getPaginateRessource(
        userModel,
        paginator
      );
      const list = users.map(
        ({ username, email, id }) => new User({ username, email, id })
      );
      paginator.total = await new Query<User>().getQuantity(userModel);

      res.json({ data: list, paginator });
    } catch (error) {
      //console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

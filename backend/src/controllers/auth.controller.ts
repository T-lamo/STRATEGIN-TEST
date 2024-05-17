import { Request, Response } from "express";
import { authenticate } from "../utils/auth";
import { User, userModel } from "../model/user";
import bcrypt from "bcrypt";
import { Query } from "../model/query";

const salt = bcrypt.genSaltSync(10);

const generateUsers = () =>
  [
    {
      username: "matthew",
      email: "matthew@example.com",
      password: "matthew123",
    },
    {
      username: "olivia",
      email: "olivia@gmail.com",
      password: "olivia456",
    },
    {
      username: "ethan",
      email: "ethan@outlook.com",
      password: "ethan789",
    },
    {
      username: "ava",
      email: "ava@yahoo.com",
      password: "ava999",
    },
    {
      username: "noah",
      email: "noah@live.com",
      password: "noah777",
    },
    {
      username: "mia",
      email: "mia@hotmail.com",
      password: "mia888",
    },
    {
      username: "william",
      email: "william@test.com",
      password: "william666",
    },
    {
      username: "emma",
      email: "emma@example.org",
      password: "emma555",
    },
    {
      username: "james",
      email: "james@site.com",
      password: "james432",
    },
    {
      username: "oliver",
      email: "oliver@domain.com",
      password: "oliver321",
    },
  ].forEach(async ({ username, email, password }) => {
    const data = new User({
      username,
      email,
      password: bcrypt.hashSync(password!, salt),
    });
    const users = await new Query<User>().createRessource(userModel, data);
  });

export const authController = {
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await authenticate(username, password);
    if (!token) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json(token);
  },
  register: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;

      //Check if username exists
      const user = await userModel.findOne({ username });
      if (!user) {
        const data = new User({
          username,
          email,
          password: bcrypt.hashSync(password, salt),
        });
        const users = await new Query<User>().createRessource(userModel, data);
        res.status(201).json(users);
      } else {
        res.status(409).json({
          error: "This username is already in use. Please choose another one.",
        });
      }
    } catch (error) {}
  },
};

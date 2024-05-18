import bcrypt from "bcrypt";
import { Query } from "../model/query";
import { User, userModel } from "../model/user";

const salt = bcrypt.genSaltSync(10);

export const generateUsers = () =>
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
    await new Query<User>().createRessource(userModel, data);
  });

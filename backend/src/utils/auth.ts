import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { User, userModel } from "../model/user";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
export function generateToken(username: string, role: string): string {
  return jwt.sign({ username, role }, JWT_SECRET!, { expiresIn: "30d" });
}

export async function authenticate(
  username: string,
  password: string
): Promise<{ data: { token: String; user: User } } | null> {
  const data = await userModel.findOne({ username });
  const name = data?.username;
  const email = data?.email;
  const id = data?._id;
  const user = new User({ username: name, email, id });

  if (!data) return null;
  const passwordMatch = await bcrypt.compare(password, data.password!);
  if (!passwordMatch) return null;

  const token = generateToken(username, "admin");
  return { data: { token, user } };
}

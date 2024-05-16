import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export class User {
  username?: string | null | undefined;
  email?: string | null | undefined;
  password?: string | null | undefined;
  id?: ObjectId | undefined;

  constructor(data?: Partial<User>) {
    if (data) {
      this.username = data.username! || "N/A";
      this.email = data.email || "N/A";
      this.password = data.password;
      this.id = data.id || undefined;
    }
  }
}

const Schema = mongoose.Schema;
const schema = new Schema({
  // Define your schema fields
  username: String,
  email: String,
  password: String,
});
export const userModel = mongoose.model("User", schema);

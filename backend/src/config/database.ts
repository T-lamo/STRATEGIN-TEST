import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ghcgmnf.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0`;

//Set up a singleton pattern for connection
export class Database {
  private static instance: Database | null = null;

  private constructor() {}

  static async getInstance(): Promise<Database> {
    if (!Database.instance) {
      Database.instance = new Database();
      await Database.instance.connect();
    }
    return Database.instance;
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(uri);
      //console.log("Connected to MongoDB");
    } catch (error: any) {
      throw new Error("Error connecting to MongoDB: " + error.message);
    }
  }
}

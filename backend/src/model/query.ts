import { Database } from "../config/database";
import mongoose from "mongoose";
import { userModel } from "./user";
import { Paginator } from "./paginator";

export class Query<T> {
  public dbconn = Database.getInstance();

  constructor(data?: Partial<Query<T>>) {
    if (data) {
    }
  }

  getPaginateRessource(
    data: mongoose.Model<T>,
    paginator: Paginator
  ): Promise<
    mongoose.IfAny<
      T,
      any,
      mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>
    >[]
  > {
    const result = async () =>
      await data.find().skip(paginator.first).limit(paginator.rows);
    return result();
  }

  getQuantity(data: mongoose.Model<T>): Promise<number> {
    const result = async () => await data.estimatedDocumentCount();
    return result();
  }
  createRessource(
    model: mongoose.Model<T>,
    data: T
  ): Promise<
    mongoose.IfAny<
      T,
      any,
      mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>
    >
  > {
    const result = async () => await model.create({ ...data });
    return result();
  }

  getOneById(
    model: mongoose.Model<T>,
    id: String
  ): Promise<mongoose.IfAny<
    T,
    any,
    mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>
  > | null> {
    const result = async () => await model.findById(id);

    return result();
  }
}

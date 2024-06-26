import cors from "cors";
import express from "express";

import * as dotenv from "dotenv";
import { Database } from "./config/database";

import { appRoutes } from "./routes";
dotenv.config();

const app = express();
const corsOptions = {
  origin: "*",
};
app.use(express.json()).use(cors(corsOptions));

const port = process.env.PORT || 3001;

app.use("/api", appRoutes);

Database.getInstance()
  .then(() => {
    app.listen(port, async () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

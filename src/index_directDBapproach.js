import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on((error) => {
      console.error("Error on db conn", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is listening on https://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.error("Error server", error);
    throw error;
  }
})();

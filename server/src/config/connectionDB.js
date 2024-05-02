import mongoose from "mongoose";
import { dburl } from "./config.js";

export const connectionDB = () => {
  mongoose
    .connect(`${dburl}/newsapp`)
    .then(() => {
      console.log("DB connection Success");
    })
    .catch(() => {
      console.log("DB connection Failed");
    });
};

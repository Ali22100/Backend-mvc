import mongoose from "mongoose";
import 'dotenv/config';
import chalk from "chalk";

export const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    mongoose
      .connect(MONGODB_URI)
      .then(() => {
        console.log(chalk.white("mongo agaya"));
      })
      .catch((err) => {
        console.log(chalk.yellow("mongo noi aya"));
      });
  } catch (error) {
    console.log(error);
  }
};
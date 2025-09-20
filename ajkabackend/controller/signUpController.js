import { userModel } from "../model/userSchema.js";
import bcrypt from "bcryptjs";

export const signupController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({
        message: "Required fields are missing",
        status: false,
      });
    }

    const encryptPassword = await bcrypt.hash(password, 10);

    const userObj = {
      firstName,
      lastName,
      email,
      password: encryptPassword,
    };

    const saveData = await userModel.create(userObj);

    res.status(200).json({
      message: "create user ",
      saveData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
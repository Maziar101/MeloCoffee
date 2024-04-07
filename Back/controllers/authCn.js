import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Users from "../models/userModel.js";

export const Register = async (req, res, next) => {
  const { name, username, password } = req.body;

  try {
    const hashedPassword = bcryptjs.hashSync(password);
    const newUser = await Users.create({
      name,
      username,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to create user.",
    });
  }
};

export const Login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      res.status(400).json({ message: "Please send username and password." });
    }
    const user = await Users.findOne({ username });
    if (!user) {
      res.status(400).json({
        message: "Username Or Password Is Incorrect",
      });
    }
    const validatedPass = bcryptjs.compareSync(password, user.password);
    if (!validatedPass) {
      res.status(400).json({
        message: "Username Or Password Is Incorrect",
      });
    }
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET
    );
    const { hashPass, ...otherUsers } = user._doc;
    res.status(200).json({
      status: "success",
      message: "Login Successfully",
      token,
      user: otherUsers,
    });
  } catch (err) {
    res.status(400).json({
        status: "error",
        message:"Error Occurred While Logging in",
    });
  }
};

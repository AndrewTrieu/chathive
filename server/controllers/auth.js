import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * Register a user
 */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      profilePicturePath,
      friends,
      location,
      description,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profilePicturePath,
      friends,
      location,
      description,
      admin: false,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a user
 */
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    try {
      await user.delete();
      res.status(200).json({ msg: "User has been deleted" });
    } catch (error) {
      res.status;
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Login a user
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign(
      { id: user._id, admin: user.admin },
      process.env.JWT_SECRET
    );
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

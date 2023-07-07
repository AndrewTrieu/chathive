import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: 6,
    },
    profilePicturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    description: String,
    admin: Boolean,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

import User from "../models/User.js";
import Post from "../models/Post.js";
import { mockUsers, mockPosts } from "../data/mock.js";

const injectMockData = async () => {
  /* Inject mock data - DO NOT USE IN PRODUCTION */
  User.insertMany(mockUsers).then(() => console.log("Mock users injected"));
  Post.insertMany(mockPosts).then(() => console.log("Mock posts injected"));
};

export default injectMockData;

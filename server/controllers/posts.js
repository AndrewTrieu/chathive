import Post from "../models/Post.js";
import User from "../models/User.js";

/**
 * Create - POST
 */
export const createPost = async (req, res) => {
  try {
    const { userId, content, contentPicturePath } = req.body;
    const user = await User.findById(userId);

    const newPost = new Post({
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      content,
      profilePicturePath: user.profilePicturePath,
      contentPicturePath,
      likes: {},
      comments: [],
    });

    await newPost.save();

    const posts = await Post.find();

    res.status(201).json(posts);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

/**
 * Read - GET
 */
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * Update - PATCH
 */
export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(postId);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

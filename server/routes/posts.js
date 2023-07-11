import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

/**
 * Read - GET
 */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId", verifyToken, getUserPosts);

/**
 * Update - PATCH
 */
router.patch("/:postId/like", verifyToken, likePost);

import express from "express";
import { getUser, getFriends, patchFriend } from "../controllers/users.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

/**
 * Read - GET
 */
router.get("/:userId", verifyToken, getUser);
router.get("/:userId/friends", verifyToken, getFriends);

/**
 * Update - PATCH
 */
router.patch("/:userId/:friendId", verifyToken, patchFriend);

export default router;

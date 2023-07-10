import express from "express";
import { getUser, getFriends, patchFriend } from "../controllers/users.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

/**
 * Read - GET
 */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getFriends);

/**
 * Update - PATCH
 */
router.patch("/:id/:friendId", verifyToken, patchFriend);

export default router;

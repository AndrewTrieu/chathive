import User from "../models/User.js";

/**
 * Read - GET
 */
export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getFriends = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const friendList = friends.map(
      ({
        _id,
        firstName,
        lastName,
        profilePicturePath,
        location,
        description,
        admin,
      }) => {
        return {
          _id,
          firstName,
          lastName,
          profilePicturePath,
          location,
          description,
          admin,
        };
      }
    );

    res.status(200).json(friendList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * Update - PATCH
 */
export const patchFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    if (userId === friendId) {
      return res.status(400).json({ error: "You cannot add yourself" });
    }
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(userId);
    }

    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const friendList = friends.map(
      ({
        _id,
        firstName,
        lastName,
        profilePicturePath,
        location,
        description,
        admin,
      }) => {
        return {
          _id,
          firstName,
          lastName,
          profilePicturePath,
          location,
          description,
          admin,
        };
      }
    );

    res.status(200).json(friendList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

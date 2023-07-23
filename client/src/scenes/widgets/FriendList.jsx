import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

const FriendList = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(`${baseUrl}/users/${userId}/friends`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Connected great minds
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends &&
          friends.length > 0 &&
          friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              userName={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.location}
              profilePicturePath={friend.profilePicturePath}
            />
          ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendList;

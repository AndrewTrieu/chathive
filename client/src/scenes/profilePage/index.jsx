import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendList from "scenes/widgets/FriendList";
import PostWidget from "scenes/widgets/PostWidget";
import FeedWidget from "scenes/widgets/FeedWidget";
import UserWidget from "scenes/widgets/UserWidget";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const getUser = async () => {
    const response = await fetch(`${baseUrl}/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNotMobile ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNotMobile ? "26%" : undefined}>
          <UserWidget
            userId={userId}
            profilePicturePath={user.profilePicturePath}
          />
          <Box m="2rem 0" />
          <FriendList userId={userId} />
        </Box>
        <Box
          flexBasis={isNotMobile ? "42%" : undefined}
          mt={isNotMobile ? undefined : "2rem"}
        >
          <PostWidget profilePicturePath={user.profilePicturePath} />
          <Box m="2rem 0" />
          <FeedWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;

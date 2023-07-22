import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import PostWidget from "scenes/widgets/PostWidget";
import FeedWidget from "scenes/widgets/FeedWidget";
import AdsWidget from "scenes/widgets/AdsWidget";
import FriendList from "scenes/widgets/FriendList";

const HomePage = () => {
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const { _id, profilePicturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNotMobile ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNotMobile ? "26%" : undefined}>
          <UserWidget userId={_id} profilePicturePath={profilePicturePath} />
        </Box>
        <Box
          flexBasis={isNotMobile ? "42%" : undefined}
          mt={isNotMobile ? undefined : "2rem"}
        >
          <PostWidget profilePicturePath={profilePicturePath} />
          <FeedWidget userId={_id} />
        </Box>
        {isNotMobile && (
          <Box flexBasis="26%">
            <AdsWidget />
            <Box mt="2rem 0" />
            <FriendList userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

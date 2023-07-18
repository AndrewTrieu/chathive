import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  FavoriteOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import ProfilePhoto from "components/ProfilePhoto";
import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from "components/FlexBetween";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, profilePicturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  const { firstName, lastName, location, description, friends } = user;

  return (
    <WidgetWrapper>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <ProfilePhoto image={profilePicturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.main,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>
              {friends.length} friend&#40;s&#41;
            </Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <FavoriteOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{description}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box p="1rem 0">
        <Typography fontSize="1rem" fontWeight="500" color={main} mb="1rem">
          Other platforms
        </Typography>
        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../../public/assets/icons/facebook.svg" alt="facebook" />
            <Box>
              <Typography color={main} fontWeight="500">
                Facebook
              </Typography>
              <Typography color={medium}>Social media</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img
              src="../../public/assets/icons/instagram.svg"
              alt="instagram"
            />
            <Box>
              <Typography color={main} fontWeight="500">
                Instagram
              </Typography>
              <Typography color={medium}>Social media</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../../public/assets/icons/linkedin.svg" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                LinkedIn
              </Typography>
              <Typography color={medium}>Network platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;

import { Box } from "@mui/material";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ProfilePhoto = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{
          objectFit: "cover",
          borderRadius: "50%",
        }}
        width={size}
        height={size}
        alt="profile"
        src={`${baseUrl}/assets/${image}`}
      />
    </Box>
  );
};

export default ProfilePhoto;

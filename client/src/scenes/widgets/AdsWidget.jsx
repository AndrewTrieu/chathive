import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdsWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="ads"
        src="https://localhpst:3001/assets/ads.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      ></img>
      <FlexBetween>
        <Typography color={main}>Helsinki, Finland</Typography>
        <Typography color={medium}>Daughter of the Baltic</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Nobody in their right mind would come to Helsinki in November!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdsWidget;

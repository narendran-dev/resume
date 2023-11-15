import { useMediaQuery, useTheme } from "@mui/material";

export default function useIsMobile() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches;
}

import { Box, Slide, Typography } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";

export default function About() {
  const isMobile = useIsMobile();
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        margin="auto"
        height="100%"
      >
        <Typography
          fontWeight={500}
          letterSpacing={0.3}
          textTransform="capitalize"
          fontSize={isMobile ? "2.5rem" : "4rem"}
          zIndex={1}
        >
          Hello World! I&apos;m Narendran, I Write Code.
        </Typography>
        <Typography fontWeight={500} zIndex={1} paragraph>
          Software developer with 6+ years of experience in JavaScript
          technology. dynamic and user-friendly web applications that meet
          business needs. Skilled in the use of various front- and back-end
          technologies for. Create scalable, secure solutions. The focus was on
          keeping you up to date with the latest industry trends and continuous
          improvements Using my technical skills to add value to the
          organization
        </Typography>
      </Box>
    </Slide>
  );
}

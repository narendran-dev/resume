import { Box, Button, Paper, Typography } from "@mui/material";
import MyProfileImg from "../assets/My_Profile.jpg";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function MainSideBar() {
  return (
    <>
      <Paper
        sx={{
          borderRadius: 0,
          width: { xs: "100%", sm: "100%", md: "30%" },
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: "35px 14px 35px 14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            fontSize={{ xs: "1.5rem", md: "2rem" }}
            textAlign="center"
            fontWeight={500}
            lineHeight=".2rem"
            variant="h1"
            gutterBottom
          >
            Narendran N
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(${MyProfileImg})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              overflow: "hidden",
              width: { xs: "50%", md: "230px" },
              height: { xs: "150px", md: "250px" },
              marginRight: { xs: 0, md: 2 },
            }}
            borderRadius={2}
            px={2}
          />
        </Box>

        <Typography
          component="a"
          href="mailto:raingopi3@gmail.com"
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          raingopi3@gmail.com
        </Typography>
        <Typography>Chennai, India</Typography>

        <Box>
          <IconButton
            aria-label="linked-in"
            href="https://www.linkedin.com/in/narendran-n-6b129811a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="github"
            href="https://github.com/narendran-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/18IjaMldl0uYcGV4NmJ-RJm03dtRQCuco/view?usp=sharing",
              "_blank"
            );
          }}
          sx={{
            borderRadius: "20px",
            color: "inherit",
            "&:hover": {
              bgcolor: (theme) => theme.palette.primary.main,
              color: "white",
              transition: ".3s all ease-in",
            },
          }}
        >
          Download Cv
        </Button>
      </Paper>
    </>
  );
}

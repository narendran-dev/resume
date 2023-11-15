import { Box, Typography, Grid, Paper, Slide } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SkillBox = ({ imgUrl, title }) => (
  <Paper
    elevation={3}
    sx={{
      display: "flex",
      flexDirection: "column",
      borderRadius: (theme) => theme.shape.borderRadius + 2,
      alignItems: "center",
      justifyContent: "center",
      p: 2,
      textAlign: "center",
      width: "150px",
      height: "160px",
    }}
  >
    <Box sx={{ mb: 2 }}>
      <img src={imgUrl} alt="" style={{ width: "50px" }} />
    </Box>
    <Typography variant="h5" component="div" sx={{ color: "#333", mb: 0 }}>
      {title}
    </Typography>
  </Paper>
);

const SkillsSection = () => (
  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Grid
      container
      spacing={1}
      // justifyContent="center"
      // alignItems="center"
      // sx={{ p: 2, fontSize: "1.2rem" }}
      zIndex={1}
    >
      {skillsData.map((skill, index) => (
        <Grid xs={4} md={3} item key={index}>
          <SkillBox imgUrl={skill.imgUrl} title={skill.altText} />
        </Grid>
      ))}
    </Grid>
  </Slide>
);

const skillsData = [
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    altText: "JavaScript",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    altText: "TypeScript",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    altText: "React",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    altText: "Material-UI",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    altText: "CSS3",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    altText: "Kafka",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
    altText: "Confluence",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    altText: "Figma",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    altText: "HTML5",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    altText: "Node.js",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    altText: "MongoDB",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    altText: "Redis",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    altText: "Kubernetes",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    altText: "Docker",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    altText: "AWS",
  },
];

export default SkillsSection;

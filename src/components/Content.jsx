import { Box, Paper } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../assets/About.json";
import { useContext } from "react";
import MenuContext from "../context/MenuContext";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};
export default function Content() {
 const { selectedItem } = useContext(MenuContext)

  return (
    <Box
      display="flex"
      justifyContent="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      component={Paper}
      m={2}
      p="60px 50px"
      width="100%"
      height={{
        // xs:'100vh',
        // md:'100vh'
      }}
      // overflow='scroll'
      // flexGrow={1}
    >
      {selectedItem?.component}
      <Lottie
        style={{
          opacity: "0.3",
          position: "absolute",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
        }}
        options={defaultOptions}
        height={400}
        width={400}
      />
    </Box>
  );
}

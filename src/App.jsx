import { Box } from "@mui/material";
import MainSideBar from "./components/MainSideBar";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { useMenu } from "./hooks/UseMenu";
import MenuContext from "./context/MenuContext";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const { selectedItem, SetMenuItem } = useMenu();
  const isMobile = useIsMobile();
  return (
    <MenuContext.Provider
      value={{
        selectedItem,
        SetMenuItem,
      }}
    >
      <Box
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
        display="flex"
      >
       {!isMobile && <MainSideBar />}
        <Content />
        <NavBar />
      </Box>
    </MenuContext.Provider>
  );
}

export default App;

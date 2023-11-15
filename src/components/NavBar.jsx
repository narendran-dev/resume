import { Button, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useMenu } from "../hooks/UseMenu";
import MenuContext from "../context/MenuContext";
// import { MenuItem } from "../MenuItem";

export default function NavBar() {
  const { menuItems } = useMenu();
  const { SetMenuItem, selectedItem } = useContext(MenuContext);

  return (
    <>
      <Paper
        sx={{
          borderRadius: 0,
          width: { md: "20%", xs: "100%" },
          height: { md: "100vh", xs: "20vh" },
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: "column", xs: "row" },
          alignItems: "center",
          // gap: 1,
          // p: "35px 14px 35px 14px",
        }}
      >
        {menuItems.map((o) => (
          <Button
            key={o.id}
            onClick={() => {
              SetMenuItem(o.id);
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 0,
              // width:'100%'
            }}
            fullWidth
            color={selectedItem?.id === o.id ? "secondary" : "inherit"}
          >
            {React.createElement(o.Icon)}
            <Typography gutterBottom>{o.Name}</Typography>
          </Button>
        ))}
      </Paper>
    </>
  );
}

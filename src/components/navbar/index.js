import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          backgroundColor: "white",
          "& .MuiBottomNavigationAction-root": {
            color: "#b6b6b6",
          },
          "& .MuiBottomNavigationAction-label": {
            fontWeight: "600",
            color: "#736e6e !important",
          },
          "& .Mui-selected": {
            color: "#e53935",
          },
        }}
      >
        <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
        <BottomNavigationAction label="Ordenes" icon={<DescriptionIcon />} />
        <BottomNavigationAction label="Ajustes" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Menú" icon={<MenuIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;

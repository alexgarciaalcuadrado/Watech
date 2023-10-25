import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
        <BottomNavigationAction
          label="Inicio"
          icon={<HomeIcon />}
          onClick={() => {
            navigate("/");
          }}
        />
        <BottomNavigationAction label="Ordenes" icon={<DescriptionIcon />} />
        <IconButton
          sx={{
            backgroundColor: "#e53935",
            color: "#fff",
            border: "2px solid #fff",
            boxShadow: "0px 0px 11px -1px rgba(0,0,0,0.75)",
            position: "relative",
            bottom: "40px",
            width: "55px",
          }}
          aria-label="agregar"
        >
          <AddIcon />
        </IconButton>
        <BottomNavigationAction label="Ajustes" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Menú" icon={<MenuIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;

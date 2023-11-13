import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
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
        <BottomNavigationAction
          label="Sensos"
          icon={<DescriptionIcon />}
          onClick={() => {
            navigate("/order-table");
          }}
        />
        <BottomNavigationAction label="Ajustes" icon={<SettingsIcon />} />
        <BottomNavigationAction
          label="Salir"
          icon={<ExitToAppIcon />}
          onClick={() => {
            navigate("/login");
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;

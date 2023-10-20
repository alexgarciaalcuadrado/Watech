import React from "react";
import Box from '@mui/material/Box';
import Logo from "../../assets/logo.svg";

const Header = () => {

  return (
    <Box className="header" sx={{ 
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      backgroundColor: "white",
     }}>
        <img className="logo" src={Logo} alt="support-it logo"/>
        <h3>¡Hola Daniel!</h3>
    </Box>
  );
};

export default Header;



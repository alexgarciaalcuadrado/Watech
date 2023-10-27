import React from "react";
import Box from '@mui/material/Box';
import Logo from "../../assets/logo.svg";

const Header = () => {

  return (
    <Box className="header" sx={{ 
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      backgroundColor: "white",
      position:"fixed", top:0, width:"100%"
     }}>
        <img className="logo" src={Logo} alt="support-it logo"/>
        <h3>¡Hola Daniel!</h3>
    </Box>
  );
};

export default Header;



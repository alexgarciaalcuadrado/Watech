import React from "react";
import Box from '@mui/material/Box';
import Logo from "../../assets/Watech.jpg";

const Header = () => {

  return (
    <Box className="header" sx={{ 
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      backgroundColor: "white",
      zIndex: 100,
      position:"fixed", top:0, width:"100%"
     }}>
        <img className="logo" src={Logo} alt="support-it logo"/>
        <h4>Bienvenido, Daniel</h4>
    </Box>
  );
};

export default Header;



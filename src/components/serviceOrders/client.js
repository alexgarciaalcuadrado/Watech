import { Box } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Client = ({ showIcon = false }) => {
  return (
    <Box className="cliente_container">
      <Box className="text_container">
        <h4>Cliente: Argen Fruit S.A</h4>
        <h4>Domicilio: Calle siempre viva 477</h4>
      </Box>

      {showIcon && (<AddIcon
        sx={{
          backgroundColor: "#0b8e0b",
          color: "white",
          borderRadius: "15px",
          border: "2px solid #fff",
        }}
        aria-label="agregar"
        onClick={() => {}}
      ></AddIcon>)}
    </Box>
  );
};

export default Client;

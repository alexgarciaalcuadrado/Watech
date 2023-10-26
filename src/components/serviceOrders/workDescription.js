import { Box } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const WorkDescription = () => {

  return (
    <Box className="work_description_container">
        <Box className="cliente_container">
            <Box className="text_container">
            <h4>Cliente: Argen Fruit S.A</h4>
            <h4>Domicilio: Calle siempre viva 477</h4>
            </Box>
            
            <AddIcon
          sx={{
            backgroundColor: "#0b8e0b",
            color: "white",
            borderRadius: "15px",
            border: "2px solid #fff",
          }}
          aria-label="agregar"
          onClick={() => {
          }}
        ></AddIcon>
        </Box>
        <Box style={{marginTop:"20px"}}>
            <h4>Descripción del trabajo</h4>
            <TextareaAutosize className="textarea" aria-label="minimum height" minRows={7} />
        </Box>
    </Box>
  );
};

export default WorkDescription;

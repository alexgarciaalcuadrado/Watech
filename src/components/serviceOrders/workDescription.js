import { Box } from "@mui/material";
import React from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Client from "./client";

const WorkDescription = () => {

  return (
    <Box className="work_description_container">
        <Client showIcon={true}/>
        <Box>
            <h4>Descripción del trabajo</h4>
            <TextareaAutosize className="textarea" aria-label="minimum height" minRows={12} />
        </Box>
    </Box>
  );
};

export default WorkDescription;

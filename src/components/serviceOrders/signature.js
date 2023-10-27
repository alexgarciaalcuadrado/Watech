import React from "react";
import { Box } from "@mui/material";
import { ReactPainter } from "react-painter";
import Client from "./client";
import { useNavigate } from "react-router-dom";

const Signature = () => {
    const navigate = useNavigate();
  return (
    <Box className="photo_upload_container">
      <Client />
      <h4>Firma del cliente</h4>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "30px",
          border: "1px solid #d6d5d5",
          overflow: "hidden"
        }}
      >
        <ReactPainter
          width={300}
          height={150}
          initialLineWidth={2}
          onSave={(blob) => {
            console.log(blob);
            navigate("/")
          }}
          render={({ triggerSave, canvas }) => (
            <div>
              <button
                className="save_signature_button"
                style={{display:"none"}}
                onClick={(e) => {
                  triggerSave(e);
                }}
              >
                Save Canvas
              </button>
              <div>{canvas}</div>
            </div>
          )}
        />
      </Box>
    </Box>
  );
};

export default Signature;

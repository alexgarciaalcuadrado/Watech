import { Box } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import RedButton from "../buttons/redButton";
import WorkDescription from "./workDescription";
import Photos from "./photos";
import Signature from "./signature";

const ServiceOrders = () => {
  const [currentStep, setCurrentSetp] = useState(1);

  return (
    <Box className="order_form_container">
      <Box className="steps_container">
        <IoIosArrowDropleftCircle
          size={"25px"}
          color={currentStep !== 1 ? "#e53935" : "#c8bfbf"}
          onClick={() => {
            if (currentStep !== 1) {
              setCurrentSetp(currentStep - 1);
            }
          }}
        />
        <Box className="text_container">
          <h4>Nueva orden de servicio</h4>
          <p>Paso {currentStep} de 3</p>
        </Box>
        <IoIosArrowDroprightCircle
          size={"25px"}
          color={currentStep !== 3 ? "#e53935" : "#c8bfbf"}
          onClick={() => {
            if (currentStep !== 3) {
              setCurrentSetp(currentStep + 1);
            }
          }}
        />
      </Box>
        {currentStep === 1 ? (
          <WorkDescription />
        ) : currentStep === 2 ? (
          <Photos />
        ) : currentStep === 3 ?(
          <Signature />
        ) : (
          <></>
        )}
        <Box style={{marginTop:"50px", width: "100%"}}>
        <RedButton
        title={currentStep === 3 ? "Finalizar" : "Siguiente"}
        type="submit"
        onClick={() => {
          if (currentStep === 1 || currentStep === 2) {
            setCurrentSetp(currentStep + 1);
          } else {
            const hiddenButton = document.querySelector(".save_signature_button");
          if (hiddenButton) {
            hiddenButton.click();
          };
          }
        }}
        disabled={false}
      />
        </Box>
    </Box>
  );
};

export default ServiceOrders;

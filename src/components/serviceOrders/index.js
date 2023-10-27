import { Box } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import RedButton from "../buttons/redButton";
import WorkDescription from "./workDescription";
import Photos from "./photos";

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
        ) : (
          <></>
        )}
        <Box style={{marginTop:"50px", width: "100%"}}>
        <RedButton
        title="Siguiente"
        type="submit"
        onClick={() => {
          if (currentStep !== 1) {
            setCurrentSetp(currentStep - 1);
          }
        }}
        disabled={false}
      />
        </Box>
    </Box>
  );
};

export default ServiceOrders;

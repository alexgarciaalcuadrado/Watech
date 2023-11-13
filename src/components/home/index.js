import React from "react";
import { Box } from "@mui/material";

const Home = () => {

  const mockedData = [
    {
      title: "pH",
      value: "7.82",
      unit: "pH",
      time: "12:03",
      date: "11/11/2023"
    },
    {
      title: "Temperatura",
      value: "22",
      unit: "grados centígrados",
      time: "12:03",
      date: "11/11/2023"
    },
    {
      title: "Conductividad",
      value: "853",
      unit: "uS/cm",
      time: "12:03",
      date: "11/11/2023"
    },
    {
      title: "Concentración de iones",
      value: "1.82",
      unit: "mg/L",
      time: "12:03",
      date: "11/11/2023"
    },
    {
      title: "Niveles de oxígeno",
      value: "1.82",
      unit: "mg/L",
      time: "12:03",
      date: "11/11/2023"
    },
    {
      title: "Turbidez",
      value: "103",
      unit: "mg/L",
      time: "12:03",
      date: "11/11/2023"
    },
  ]

  return (
    <Box className="home">
       <Box className="items_container">
        {mockedData.map((item) => {
          return (
            <Box className="item">
              <div className="title_container">
                <h4>{item.title}</h4>
              </div>
              <Box className="details">
                <h2 className="value">{item.value}</h2>
                {item.unit && <h2>{item.unit}</h2>}
                <p>Analizado por última vez a las {item.time} hs del día {item.date}</p>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  );
};

export default Home;

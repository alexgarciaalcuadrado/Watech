import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ContactModal from "./modal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["01:00", "10:00", "17:00", "20:00"];

const optionsPH = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "pH",
    },
  };

  const pH = {
    labels,
    datasets: [
      {
        label: "pH",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 14 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const optionsTemperatura = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "Temperatura",
    },
  };

  const Temperatura = {
    labels,
    datasets: [
      {
        label: "Temperatura",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
        backgroundColor: "#6fb870",
      },
    ],
  };
  const optionsConductividad = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "Conductividad",
    },
  };

  const Conductividad = {
    labels,
    datasets: [
      {
        label: "Conductividad",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
        backgroundColor: "#6fb8b2",
      },
    ],
  };
  const optionsIons = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "Concentración de iones",
    },
  };

  const ions = {
    labels,
    datasets: [
      {
        label: "Concentración de iones",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "#e2e323",
      },
    ],
  };
  const optionsOx = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "Niveles de oxígeno",
    },
  };

  const oxiCon = {
    labels,
    datasets: [
      {
        label: "Niveles de oxígeno",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "#dd6298",
      },
    ],
  };

  const Turbidez = {
    labels,
    datasets: [
      {
        label: "Turbidez",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#f00e21",
      },
    ],
  };
  const optionsTurbidez = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "Turbidez",
    },
  };
const Revision = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const revision = location.state.data;

  return (
    <>
      <Box
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          marginTop: "30px",
          marginBottom: "70px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          width: "380px",
          alignItems: "center",
        }}
      >
        <h4 style={{ marginBottom: "0" }}>
          Diagnóstico del día {revision.date}
        </h4>
        <hr
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#5947a8",
            border: "none",
          }}
        />
        {revision?.state === "Revisar" && (
          <Box>
            <h5 style={{ marginBottom: 0 }}>
              Se encontró un problema:{" "}
              <span style={{ color: "#d60202" }}>
                RESIDUOS DE MICROPLÁSTICOS
              </span>
            </h5>
            <p>
              Se recomienda comunicarse con uno de{" "}
              <span
                style={{
                  color: "#5959ff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                nuestros técnicos
              </span>{" "}
              para regularizar el estado de tu agua.
            </p>
          </Box>
        )}
        <Box style={{ width: "300px", margin: "10px 2px" }}>
          <Bar options={optionsPH} data={pH} />
        </Box>
        <Box style={{ width: "300px", margin: "10px 2px" }}>
          <Bar options={optionsTemperatura} data={Temperatura} />
        </Box>
        <Box style={{ width: "300px", margin: "10px 2px" }}>
          <Bar options={optionsConductividad} data={Conductividad} />
        </Box>
        <Box style={{ width: "300px", margin: "10px 2px" }}>
          <Bar options={optionsIons} data={ions} />
        </Box>
        <Box style={{ width: "300px", margin: "10px 2px" }}>
          <Bar options={optionsOx} data={oxiCon} />
        </Box>
        <Box style={{ width: "300px", margin: "10px 2px" }}>
          <Bar options={optionsTurbidez} data={Turbidez} />
        </Box>
      </Box>
      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Revision;

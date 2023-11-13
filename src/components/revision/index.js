import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Revision = () => {
    const location = useLocation();
    const revision = location.state.data;
    const labels = ['01:00', '10:00', '17:00', '20:00'];
    
    const optionsPH = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        title:{
            display: true,
            text:'pH'
        },
      };
      
      
    const pH = {
        labels,
        datasets: [
          {
            label: 'pH',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 14 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };

      const optionsTemperatura = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        title:{
            display: true,
            text:'Temperatura'
        },
      };
      
      
    const Temperatura = {
        labels,
        datasets: [
          {
            label: 'Temperatura',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
            backgroundColor: '#6fb870',
          }
        ],
      };
      const optionsConductividad = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        title:{
            display: true,
            text:'Conductividad'
        },
      };
      
      
    const Conductividad = {
        labels,
        datasets: [
          {
            label: 'Conductividad',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
            backgroundColor: '#6fb8b2',
          }
        ],
      };
      const optionsIons = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        title:{
            display: true,
            text:'Concentración de iones'
        },
      };
      
      
    const ions = {
        labels,
        datasets: [
          {
            label: 'Concentración de iones',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            backgroundColor: '#e2e323',
          }
        ],
      };
      const optionsOx = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        title:{
            display: true,
            text:'Niveles de oxígeno'
        },
      };
      
      
    const oxiCon = {
        labels,
        datasets: [
          {
            label: 'Niveles de oxígeno',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            backgroundColor: '#dd6298',
          }
        ],
      };

      const Turbidez = {
        labels,
        datasets: [
          {
            label: 'Turbidez',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: '#f00e21',
          }
        ],
      };
      const optionsTurbidez = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        title:{
            display: true,
            text:'Turbidez'
        },
      };
      
  return( 
  <Box style={{
    backgroundColor: "white",
    borderRadius: "20px",
    marginTop: "30px",
    marginBottom: "70px",
    textAlign: "center",
  }}>
    <h4>Diagnóstico del día {revision.date}</h4>
    <Box style={{width: "300px", margin: "10px 2px"}}>
        <Bar options={optionsPH} data={pH} />
    </Box>
    <Box style={{width: "300px", margin: "10px 2px"}}>
        <Bar options={optionsTemperatura} data={Temperatura} />
    </Box>
    <Box style={{width: "300px", margin: "10px 2px"}}>
        <Bar options={optionsConductividad} data={Conductividad} />
    </Box>
    <Box style={{width: "300px", margin: "10px 2px"}}>
        <Bar options={optionsIons} data={ions} />
    </Box>
    <Box style={{width: "300px", margin: "10px 2px"}}>
        <Bar options={optionsOx} data={oxiCon} />
    </Box>
    <Box style={{width: "300px", margin: "10px 2px"}}>
        <Bar options={optionsTurbidez} data={Turbidez} />
    </Box>

  </Box>
  );
}

export default Revision;
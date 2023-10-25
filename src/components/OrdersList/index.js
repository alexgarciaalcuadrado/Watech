import React from "react";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const OrdersList = () => {
  const mocked = [
    {
      date: "10/10/2023",
      title: "Argen Fruit S.S.",
      state: "Sin firmar",
    },
    {
      date: "9/10/2023",
      title: "Canal 9 televida",
      state: "Completada",
    },
    {
      date: "10/10/2023",
      title: "Argen Fruit S.S.",
      state: "Completada",
    },
    {
      date: "10/10/2023",
      title: "Argen Fruit S.S.",
      state: "Sin firmar",
    },
    {
      date: "9/10/2023",
      title: "Canal 9 televida",
      state: "Completada",
    },
    {
      date: "10/10/2023",
      title: "Argen Fruit S.S.",
      state: "Completada",
    },
    {
      date: "10/10/2023",
      title: "Argen Fruit S.S.",
      state: "Sin firmar",
    },
    {
      date: "9/10/2023",
      title: "Canal 9 televida",
      state: "Completada",
    },
    {
      date: "10/10/2023",
      title: "Argen Fruit S.S.",
      state: "Completada",
    },
  ];
  return (
    <Box className="order_list_container">
      <List
        className="list"
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="h1"
            className="header"
            id="nested-list-subheader"
          >
            Últimas ordenes de servicio
          </ListSubheader>
        }
      >
        {mocked.map((item) => {
          return (
            <ListItemButton className="item">
              <Box>
                <h4 style={{ fontSize: "14px" }}>
                  {item.date} -{" "}
                  <span style={{ fontWeight: "400" }}>{item.title}</span>
                </h4>
                <h4 style={{ fontSize: "13px" }}>
                  Estado:{" "}
                  <span style={{ fontWeight: "400" }}>{item.state}</span>
                </h4>
              </Box>
              <ListItemIcon style={{justifyContent: "end"}}>
                <IoIosArrowDroprightCircle size={"25px"} color="#e53935"/>
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default OrdersList;

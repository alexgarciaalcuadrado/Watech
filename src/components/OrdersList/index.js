import React from "react";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const OrdersList = () => {
  const navigate = useNavigate();
  const mocked = [
    {
      date: "10/10/2023",
      title: "Revisión diaria",
      state: "Revisar",
    },
    {
      date: "9/10/2023",
      title: "Revisión diaria",
      state: "Completada",
    },
    {
      date: "8/10/2023",
      title: "Revisión diaria",
      state: "Completada",
    },
    {
      date: "7/10/2023",
      title: "Revisión diaria",
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
            Últimos sensos
          </ListSubheader>
        }
      >
        {mocked.map((item) => {
          return (
            <ListItemButton className="item" onClick={() => {
              navigate(`/revision`, {state: {data: item}});
            }}>
              <Box>
                <h4 style={{ fontSize: "14px" }}>
                  {item.date} -{" "}
                  <span style={{ fontWeight: "400" }}>{item.title}</span>
                </h4>
                <h4 style={{ fontSize: "13px" }}>
                  Estado:{" "}
                  <span style={{ fontWeight: "400", color: item.state === "Completada" ? "green" : "#ff0000" }}>{item.state}</span>
                </h4>
              </Box>
              <ListItemIcon style={{justifyContent: "end"}}>
                <IoIosArrowDroprightCircle size={"25px"} color="#64a8e6"/>
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default OrdersList;

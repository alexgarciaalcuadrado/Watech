import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/material";

const columns = ["Nombre", "Domicilio"];

const data = [
  ["Argenfruit", "Test Corp 234",],
  ["John Walsh", "Garibaldi 234, Mendoza"],
  ["Expo verde", "Calle trece, Córdoba"],
];

const options = {
  filterType: "checkbox",
  responsive:"simple",
  customTable: {
    title: {
      display: "above",
      fontWeight: 600
    },
  },
  textLabels:{
    body: {
      noMatch: "Lo sentimos, no se encontraron registros",
      toolTip: "Ordenar",
      columnHeaderTooltip: (column) => `Orden para ${column.label}`,
    },
    pagination: {
      next: "Página siguiente",
      previous: "Página anterior",
      rowsPerPage: "Filas por página:",
      displayRows: "de",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Descargar archivo Excel",
      print: "Imprimir",
      viewColumns: "Ver columnas",
      filterTable: "Filtrar tabla",
    },
    filter: {
      all: "Todo",
      title: "Filtros",
      reset: "Borrar",
    },
    viewColumns: {
      title: "Mostrar columnas",
      titleAria: "Mostrar/ocultar columnas de la tabla",
    },
    selectedRows: {
      text: "fila(s) seleccionadas",
      delete: "Eliminar",
      deleteAria: "Eliminar las filas seleccionadas",
    },
  }
};

const OrdersTable = () => {
  return (
    <Box sx={{
        height: "80%",
        width: "80%",
        overflow: "overlay",
    }}>
      <MUIDataTable
        title={"Clientes"}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrdersTable;

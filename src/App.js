import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/login";
import OrdersList from "./components/OrdersList";
import OrdersTable from "./components/ordersTable";
import ServiceOrders from "./components/serviceOrders";
const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <OrdersList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-table"
            element={
              <ProtectedRoute>
                <OrdersTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/new-order"
            element={
              <ProtectedRoute>
                <ServiceOrders />
              </ProtectedRoute>
            }
          />
          </Routes>
          </Router>
  );
}

export default App;

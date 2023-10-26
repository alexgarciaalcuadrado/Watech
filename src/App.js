import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Photos from "./components/serviceOrders/photos";
import Login from "./components/login";
import OrdersList from "./components/OrdersList";
import OrdersTable from "./components/ordersTable";
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
          </Routes>
          </Router>
  );
}

export default App;

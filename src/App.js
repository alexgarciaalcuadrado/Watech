import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/login";
import OrdersList from "./components/OrdersList";
import ServiceOrders from "./components/serviceOrders";
import Home from "./components/home";
import Revision from "./components/revision";
const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-table"
            element={
              <ProtectedRoute>
                <OrdersList />
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
          <Route
            path="/revision"
            element={
              <ProtectedRoute>
                <Revision />
              </ProtectedRoute>
            }
          />
          </Routes>
          </Router>
  );
}

export default App;

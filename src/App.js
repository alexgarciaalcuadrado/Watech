import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Photos from "./components/serviceOrders/photos";
import Login from "./components/login";
const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Photos />
              </ProtectedRoute>
            }
          />
          </Routes>
          </Router>
  );
}

export default App;

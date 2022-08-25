import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hola soy Home</h1>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default MainRoutes;

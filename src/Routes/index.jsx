import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Dashboard from "../components/pages/Dashboard";
import { AuthContext } from "@/context/Auth.jsx";

function MainRoutes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<h1>Hola soy Home</h1>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route
        path="/dashboard"
        element={isAuth ? <Dashboard /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default MainRoutes;

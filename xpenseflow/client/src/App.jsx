import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import AdminPanel from "./pages/AdminPanel";
import AddExpense from "./pages/AddExpense";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/employee" element={<Login userType="employee" />} />
        <Route path="/login/manager" element={<Login userType="manager" />} />
        <Route path="/login/admin" element={<Login userType="admin" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/add-expense" element={<AddExpense />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

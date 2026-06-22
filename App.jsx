import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StudentRegister from "./pages/StudentRegister";
import CompanyRegister from "./pages/CompanyRegister";
import Dashboard from "./pages/Dashboard";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyDashboard from "./pages/CompanyDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StudentRegister from "./pages/StudentRegister";
import CompanyRegister from "./pages/CompanyRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/company-register" element={<CompanyRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
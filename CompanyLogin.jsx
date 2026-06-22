import { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

function CompanyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await API.post("/login/company", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Company Login Successful!");
      navigate("/company-dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Company Login</h1>

      <div className="card p-4 mt-3">
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Company Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default CompanyLogin;
import { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await API.post("/login/student", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login Successful!");
      navigate("/dashboard");
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Login Failed!");
    }   
  };

  return (
    <div className="container mt-5">
      <h1>Placement Portal</h1>

      <div className="card p-4 mt-3">
        <h3>Login</h3>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
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

export default Login;

import { useState } from "react";
import API from "./api";

function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roll_number: "",
    branch: "",
    cgpa: "",
    graduation_year: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await API.post(
        "/register/student",
        formData
      );

      alert(response.data.message);
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="container mt-5">
      <h1>Student Registration</h1>

      <div className="card p-4 mt-3">

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="roll_number"
          placeholder="Roll Number"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="number"
          name="cgpa"
          placeholder="CGPA"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="number"
          name="graduation_year"
          placeholder="Graduation Year"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
          onClick={handleRegister}
        >
          Register
        </button>

      </div>
    </div>
  );
}

export default StudentRegister;

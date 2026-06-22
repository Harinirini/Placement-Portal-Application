import { useState } from "react";
import API from "./api";

function CompanyRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    hr_contact: "",
    website: "",
    industry: "",
    description: "",
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
        "/register/company",
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
      <h1>Company Registration</h1>

      <div className="card p-4 mt-3">

        <input
          type="text"
          name="name"
          placeholder="Company Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Company Email"
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
          name="hr_contact"
          placeholder="HR Contact"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="industry"
          placeholder="Industry"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Company Description"
          className="form-control mb-3"
          onChange={handleChange}
        ></textarea>

        <button
          className="btn btn-success"
          onClick={handleRegister}
        >
          Register Company
        </button>

      </div>
    </div>
  );
}

export default CompanyRegister;

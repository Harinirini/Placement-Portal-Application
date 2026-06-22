import { useNavigate } from "react-router-dom";

function CompanyDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/company-login");
  };

  return (
    <div className="container mt-5">
      <h1>Company Dashboard</h1>

      <div className="card p-4 mt-3">
        <h3>Welcome Company 🚀</h3>
        <p>Your company account is active.</p>
      </div>

      <button
        className="btn btn-danger mt-3"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default CompanyDashboard;
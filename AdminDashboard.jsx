import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin-login");
  };

  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>

      <div className="card p-4 mt-3">
        <h3>Welcome Admin 👨‍💼</h3>
        <p>Placement Portal Administration Panel</p>
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

export default AdminDashboard;
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>Student Dashboard</h1>

      <div className="card p-4 mt-4">
        <h3>Student Profile</h3>

        <p><strong>Name:</strong> Divya</p>
        <p><strong>Email:</strong> divya123@gmail.com</p>
        <p><strong>Roll Number:</strong> 069</p>
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>CGPA:</strong> 8</p>
        <p><strong>Graduation Year:</strong> 2028</p>
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

export default Dashboard;

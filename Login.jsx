function Login() {
  return (
    <div className="container mt-5">
      <h1>Placement Portal</h1>

      <div className="card p-4 mt-3">
        <h3>Login</h3>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
        />

        <button className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
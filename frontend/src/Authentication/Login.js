import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRoute } from "../utils/ApiRoutes";
import axios from "axios";
import "../Css/Login.css";

const Login = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    const { data } = await axios.post(loginRoute, {
      email,
      password,
    });
    if (data.status === true) {
      localStorage.setItem("token", data.authToken);
      alert(data.message);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
    setCredentials({ email: "", password: "" });
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container container mt-5">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Login to Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

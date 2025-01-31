import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import apiClient from "../api/apiClient";

import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("gustyaquino@yahoo.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onEmailChange(event) {
    const email = event.target.value;
    setEmail(email);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await apiClient.post(
        "/login",
        {
          email: email,
          password: password,
        },
        {
          skipResponseInterceptor: true,
        }
      );

      const data = response.data;
      localStorage.setItem("token", data.token);
      //localStorage.setItem("user", JSON.stringify(data));

      console.log(data);

      navigate("/");
    } catch (error) {
      setError("Usuario o contraseña no válidos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="usuario@mail.net"
                onChange={onEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                placeholder="********"
                onChange={onPasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Cargando.." : "Iniciar sesión"}
            </button>
            <p></p>
          </form>
          <Link
            style={{ display: "block", textAlign: "center" }}
            to="/register"
          >
            Quiero registrarme
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

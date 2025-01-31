import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onPasswordConfChange = (event) => {
    setPasswordConf(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading=(true)
    const data = {
      nombre: name,
      email: email,
      password: password,
      passwordConf: passwordConf
      
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      const data = response.data;
      localStorage.setItem("token", data.token)

      if (password != passwordConf ) {
        throw new Error("Las contraseñas no coinciden");
      }
      {
        skipResponseInterceptor= true
      }
        
    } catch (error) {
      setError("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Registrarse</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={name}
                onChange={onNameChange}
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={onEmailChange}
                placeholder="usuario@mail.net"
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
                onChange={onPasswordChange}
                placeholder="********"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordConfirmation" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirmation"
                value={passwordConf}
                onChange={onPasswordConfChange}
                placeholder="********"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Registrarse
            </button>
            <p></p>
          </form>
          <Link
            style={{ display: "block", textAlign: "center" }}
            to="/login"
          >
            Quiero iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

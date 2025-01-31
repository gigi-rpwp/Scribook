import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h1>Error 404</h1>
      <p>No se encuentra la página</p>
      <p>
        <Link to="/">Volver al inicio</Link>
      </p>
    </div>
  );
}

export default NotFound;

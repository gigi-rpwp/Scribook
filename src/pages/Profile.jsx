import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");
      //console.log(JSON.parse(userData));

      if (userData) {
        setUser(JSON.parse(userData)); // Parse and set user data
      } else {
        navigate("/login"); // Redirect to login if no user data
      }
    } catch (error) {
      console.log("No se ha podido obtener los datos del usuario");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container">
      <Navbar />
      <div className="container mt-4">
        <h1 className="mb-4">Mi Perfil</h1>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
    </div>
  );
}

export default Profile;

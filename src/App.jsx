import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  localStorage.setItem("token", "ABC123");
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: "Jack Sparrow",
      email: "jack@tortuga.net",
    })
  );

  const token = localStorage.getItem("token");
  const authenticated = token != null;

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirección */}
        <Route
          path="/"
          element={<Navigate to={authenticated ? "/home" : "/login"} replace />}
        />

        {/* Rutas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

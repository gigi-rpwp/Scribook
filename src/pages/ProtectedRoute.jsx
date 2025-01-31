import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {
    const token = localStorage.getItem("token")
    const authenticated = token !=null
}
return authenticated ? <Outlet /> : <Navigate to="/login" replace />

export default ProtectedRoute
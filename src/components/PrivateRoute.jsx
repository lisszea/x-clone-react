import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PrivateRoute() {
  const { userId } = useAuth();

  return userId ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;


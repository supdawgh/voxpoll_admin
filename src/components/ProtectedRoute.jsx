import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  if (!auth.user) return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;

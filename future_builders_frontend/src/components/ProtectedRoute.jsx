import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Layout from "./Layout";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  if (!allowedRoles.includes(user.role)) return <Navigate to="/" />;

  return <Layout>{children}</Layout>;
}

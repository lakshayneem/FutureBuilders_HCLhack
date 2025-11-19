import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
        FutureBuilders
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">

        {/* When user NOT logged in */}
        {!user && (
          <>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Patient Login
            </Link>

            <Link
              to="/doctor/login"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Doctor Login
            </Link>

            <Link
              to="/admin/login"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              Admin Login
            </Link>
          </>
        )}

        {/* When user IS logged in */}
        {user && (
          <>
            {/* Role Based Dashboard */}
            {user.role === "patient" && (
              <Link
                to="/patient/dashboard"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Patient Dashboard
              </Link>
            )}

            {user.role === "doctor" && (
              <Link
                to="/doctor/dashboard"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Doctor Dashboard
              </Link>
            )}

            {user.role === "admin" && (
              <Link
                to="/admin/dashboard"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Admin Dashboard
              </Link>
            )}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

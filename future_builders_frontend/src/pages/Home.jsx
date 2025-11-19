import { Link } from "react-router-dom";
import { User, Stethoscope, Shield } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-200 p-4">

      <div className="backdrop-blur-xl bg-white/40 shadow-2xl p-10 rounded-3xl max-w-lg w-full">

        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Wellness & Preventive Care Portal
        </h1>

        <p className="text-gray-700 text-center mb-10">
          Please choose your role to continue.
        </p>

        <div className="flex flex-col gap-4">

          {/* PATIENT */}
          <Link
            to="/patient/login"
            className="flex items-center gap-3 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            <User size={24} />
            <span className="text-lg">Patient Login</span>
          </Link>

          {/* DOCTOR */}
          <Link
            to="/doctor/login"
            className="flex items-center gap-3 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition shadow-md"
          >
            <Stethoscope size={24} />
            <span className="text-lg">Doctor Login</span>
          </Link>

          {/* ADMIN */}
          <Link
            to="/admin/login"
            className="flex items-center gap-3 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition shadow-md"
          >
            <Shield size={24} />
            <span className="text-lg">Admin Login</span>
          </Link>

        </div>

      </div>
    </div>
  );
}

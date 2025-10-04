import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col relative overflow-hidden">
      {/* Background Waves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-40 md:h-60 text-blue-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,192L60,176C120,160,240,128,360,144C480,160,600,224,720,224C840,224,960,160,1080,138.7C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Hero Section */}
      <header className="relative text-center py-20 px-6 z-10">
        <h1 className="text-6xl font-extrabold text-blue-700 drop-shadow-lg mb-6">
          Xpensly
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Manage expenses effortlessly – submit, approve, and track in one
          seamless platform designed for employees, managers, and admins.
        </p>
      </header>

      {/* Cards Section */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl px-6 w-full">
          {/* Employee Card */}
          <div
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer text-center p-8 flex flex-col items-center hover:-translate-y-2"
            onClick={() => navigate("/login/employee")}
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Briefcase className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Employee
            </h2>
            <p className="text-gray-600">
              Submit your expenses and track approval status easily.
            </p>
          </div>

          {/* Manager Card */}
          <div
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer text-center p-8 flex flex-col items-center hover:-translate-y-2"
            onClick={() => navigate("/login/manager")}
          >
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Manager
            </h2>
            <p className="text-gray-600">
              Approve expenses, oversee requests, and manage your team.
            </p>
          </div>

          {/* Admin Card */}
          <div
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer text-center p-8 flex flex-col items-center hover:-translate-y-2"
            onClick={() => navigate("/login/admin")}
          >
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <ShieldCheck className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Admin
            </h2>
            <p className="text-gray-600">
              Get complete control over users and approval workflows.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Xpensly. All rights reserved.
      </footer>
    </div>
  );
}

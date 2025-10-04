import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Title & Subtitle */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Xpensly</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Now, you can easily submit your expenses, track their approval status, and get them approved easily in a hassle-free way.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Employee Card */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer text-center"
          onClick={() => navigate("/login/employee")}
        >
          <h2 className="text-xl font-semibold mb-2">Login as Employee</h2>
          <p className="text-gray-600">Submit your expenses and track approvals</p>
        </div>

        {/* Manager Card */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer text-center"
          onClick={() => navigate("/login/manager")}
        >
          <h2 className="text-xl font-semibold mb-2">Login as Manager</h2>
          <p className="text-gray-600">Approve expenses and manage your team</p>
        </div>

        {/* Admin Card */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer text-center"
          onClick={() => navigate("/login/admin")}
        >
          <h2 className="text-xl font-semibold mb-2">Login as Admin</h2>
          <p className="text-gray-600">Full control over users and approvals</p>
        </div>
      </div>
    </div>
  );
}

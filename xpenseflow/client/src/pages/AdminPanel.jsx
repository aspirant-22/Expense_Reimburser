import React from "react";
import Navbar from "../components/Navbar";

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <p>Here admin can configure approval rules and manage users.</p>
      </div>
    </div>
  );
}

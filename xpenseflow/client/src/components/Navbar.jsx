import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <span className="font-bold">XpenseFlow</span>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        
      </div>
    </nav>
  );
}

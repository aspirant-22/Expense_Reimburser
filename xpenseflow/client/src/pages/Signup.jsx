import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    // For demo: show alert and navigate to login
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for XpenseFlow</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 mb-3 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-3 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-3 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-green-600 text-white py-2 px-4 rounded w-full mb-3 hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-500 text-sm">
          Already have an account? 
          <button onClick={() => navigate("/")} className="text-blue-600 hover:underline ml-1">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

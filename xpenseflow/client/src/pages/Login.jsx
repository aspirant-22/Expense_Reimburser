import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple demo validation
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    // For hackathon demo, just navigate to dashboard
    navigate("/dashboard");
  };

  const handleSignup = () => {
    alert("Signup feature coming soon!");
  };

  const handleForgotPassword = () => {
    alert("Password recovery feature coming soon!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl mb-4 font-bold">XpenseFlow Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 mb-3 rounded w-[34%]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-3 rounded w-[34%]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white py-2 px-4 rounded w-[34%] mb-3 hover:bg-blue-700 transition"
      >
        Login
      </button>
      <div className="flex justify-between text-sm">
          <button
            onClick={handleForgotPassword}
            className="text-blue-600 hover:underline"
          >
            Forgot password?
          </button>
          <button
            onClick={handleSignup}
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </div>

        <p className="mt-4 text-center text-gray-500 text-sm">
          Don't have an account? <button onClick={handleSignup} className="text-blue-600 hover:underline">Sign Up</button>
        </p>
      
    </div>
  );
}

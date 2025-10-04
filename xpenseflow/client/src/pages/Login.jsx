import React from "react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ userType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");       // Admin only
  const [country, setCountry] = useState(""); // Admin only
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validation
    if (!email || !password || (userType === "admin" && (!name || !country))) {
      alert("Please fill all required fields");
      return;
    }

    // For hackathon demo, just navigate
    if (userType === "employee") navigate("/dashboard");
    else if (userType === "manager") navigate("/ManagerDashboard");
    else if (userType === "admin") navigate("/AdminPanel");
  };

  const handleSignup = () => alert("Signup feature coming soon!");
  const handleForgotPassword = () => alert("Password recovery feature coming soon!");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl mb-4 font-bold">
        Xpensly {userType.charAt(0).toUpperCase() + userType.slice(1)} Login
      </h2>

      {/* Admin extra fields */}
      {userType === "admin" && (
        <>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 mb-3 rounded w-[34%]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="border p-2 mb-3 rounded w-[34%]"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Other">Other</option>
          </select>
        </>
      )}

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

      <div className="flex justify-between text-sm w-[34%]">
        <button onClick={handleForgotPassword} className="text-blue-600 hover:underline">
          Forgot password?
        </button>
        <button onClick={handleSignup} className="text-blue-600 hover:underline">
          Sign Up
        </button>
      </div>

      <p className="mt-4 text-center text-gray-500 text-sm w-[34%]">
        Don't have an account?{" "}
        <button onClick={handleSignup} className="text-blue-600 hover:underline">
          Sign Up
        </button>
      </p>
    </div>
  );
}


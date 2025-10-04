import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim()) navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4 font-bold">XpenseFlow Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 mb-3 rounded w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  );
}

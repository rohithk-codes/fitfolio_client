import { useSignup } from "../hooks/useSignup";
import { useState } from "react";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, loading, error, user } = useSignup();

  const handleSubmit = () => {
    signup(email, password);

  if (user?.email) {
    return <div>Welcome,{user.email}</div>;
  }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">
  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
    
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
    />
    
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
    />
    
    <button
      onClick={handleSubmit}
      disabled={loading}
      className={`w-full py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
        loading
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {loading ? "Signing up..." : "Sign Up"}
    </button>

    {error && (
      <p className="mt-4 text-sm text-center text-red-500 bg-red-50 p-2 rounded-lg">
        {error}
      </p>
    )}
  </div>
</div>

  );
};

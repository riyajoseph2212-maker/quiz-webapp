import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white">
        {/* Valise Logo Text */}
        <div className="flex items-center justify-center mb-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <h1 className="text-xl font-semibold text-gray-800">Valise</h1>
        </div>

        {/* Back button + heading */}
        <div className="flex items-center justify-center mb-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-gray-700 hover:text-yellow-500 mr-3"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Create an Account
          </h2>
        </div>

        <p className="text-gray-600 text-center mb-6">
          Start your journey with us today.
        </p>

        {/* Sign-up form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-9 text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

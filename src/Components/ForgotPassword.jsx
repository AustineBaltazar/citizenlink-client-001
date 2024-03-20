import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/smtp/forgot-password",
        {
          userId,
          email,
        }
      );
      setMessage("Password reset link sent successfully!");
      setIsError(false);
      setUserId(""); // Clear userId state
      setEmail(""); // Clear email state
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data.error);
        setMessage(error.response.data.error);
      } else {
        console.error(error);
        setMessage("An error occurred while processing your request");
      }
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <h2 className="text-3xl font-semibold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your user ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#6D2932] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Reset Password"}
        </button>
        <div className=" mt-4">
          <Link
            to="/login"
            className="bg-[#6D2932] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline pl-"
          >
            Back
          </Link>
        </div>
      </form>
      <p
        className={`mt-4 text-sm font-bold ${
          isError ? "text-red-600" : "text-green-600"
        }`}
      >
        {message}
      </p>
    </div>
  );
}

export default ForgotPassword;

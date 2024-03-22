import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { resetIdentifier } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      setIsError(true);
      return;
    }
    try {
      await axios.post(
        `http://localhost:4000/api/smtp/reset-password/${resetIdentifier}`,
        { newPassword, resetIdentifier }
      );
      setMessage("Password reset successfully!");
      setIsError(false);
      setShowSuccessModal(true);
    } catch (error) {
      setMessage(error.response.data.error);
      setIsError(true);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-green-600 font-bold">
              Password reset successfully!
            </p>
            <button
              onClick={handleModalClose}
              className="bg-[#6D2932] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Back
            </button>
          </div>
        </div>
      )}
      <h2 className="text-3xl font-semibold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#6D2932]  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Reset Password
        </button>
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

export default ResetPassword;

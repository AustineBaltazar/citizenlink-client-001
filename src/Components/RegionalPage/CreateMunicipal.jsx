import React, { useState } from "react";
import axios from "axios";
import Logo from "/img/barangay-logo.png";
import { Link, Outlet } from "react-router-dom";

const CreateMunicipal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    suffix: "",
    position: "",
    dateOfBirth: "",
    accessLevel: "municipal",
    password: "",
  });
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    suffix: "",
    position: "",
    dateOfBirth: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessages({ ...errorMessages, [name]: "" });

    // Check and set error message for exceeding maximum length
    if (value.length > 50 && value.trim().length > 0) {
      setErrorMessages((prevState) => ({
        ...prevState,
        [name]: `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } must be 50 characters or less`,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field has an error message
    const hasErrors = Object.values(errorMessages).some((msg) => msg !== "");
    if (hasErrors) {
      return; // Don't submit if there's any error message
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/lgu/register",
        formData
      );
      console.log(response.data);
      setSuccessModalVisible(true);
      setFormData({
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        suffix: "",
        position: "",
        dateOfBirth: "",
        accessLevel: "municipal",
        password: "",
      });
      const { userId } = response.data;
      setUserId(userId);
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorModalVisible(true);

      if (error.response.data.error === "Email already exists") {
        // Set the email error message
        setErrorMessages((prevState) => ({
          ...prevState,
          email: "Email already exists",
        }));
      }
    }
  };

  const closeModal = () => {
    setSuccessModalVisible(false);
    setErrorModalVisible(false);
  };

  return (
    <div className="flex justify-center items-center h-full mt-12">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-[#6D2932] text-white px-2 py-2">Add Staff</header>
        <div className="flex justify-center items-center">
          <div className="w-full p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.firstName && "border-red-500"
                  }`}
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errorMessages.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.firstName}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.lastName && "border-red-500"
                  }`}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  required
                />
                {errorMessages.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.lastName}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Middle Name
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.middleName && "border-red-500"
                  }`}
                  type="text"
                  name="middleName"
                  placeholder="Enter Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                />
                {errorMessages.middleName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.middleName}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Suffix
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.suffix && "border-red-500"
                  }`}
                  type="text"
                  name="suffix"
                  placeholder="Enter Suffix"
                  value={formData.suffix}
                  onChange={handleChange}
                />
                {errorMessages.suffix && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.suffix}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.email && "border-red-500"
                  }`}
                  name="email"
                  value={formData.email}
                  placeholder="Enter Email"
                  onChange={handleChange}
                  required
                />
                {errorMessages.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.email}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Position
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.position && "border-red-500"
                  }`}
                  type="text"
                  name="position"
                  value={formData.position}
                  placeholder="Enter Position"
                  onChange={handleChange}
                />
                {errorMessages.position && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.position}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Date of Birth<span className="text-red-500">*</span>
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.dateOfBirth && "border-red-500"
                  }`}
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
                {errorMessages.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.dateOfBirth}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorMessages.password && "border-red-500"
                  }`}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errorMessages.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.password}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <div className="flex justify-end">
                <button
                  className="bg-[#6D2932] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {successModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-lg font-bold mb-4">Success!</h2>
            <p>Your registration was successful.</p>
            <p>User ID: {userId}</p>
            <button
              className="bg-[#6D2932] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMunicipal;

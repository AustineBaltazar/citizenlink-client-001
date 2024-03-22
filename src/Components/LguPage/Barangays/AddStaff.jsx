import React, { useState } from "react";
import axios from "axios";
import Logo from "/img/barangay-logo.png";

const AddStaff = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    middleName: "",
    suffix: "",
    position: "",
    dateOfBirth: "",
    accessLevel: "barangay",
    password: "",
    barangay: "", // Initialize with an empty string
  });
  const [userId, setUserId] = useState(""); // Add state for userId
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const { userId } = response.data; // Extract userId from response
      setUserId(userId); // Set userId state
      // Handle success, maybe redirect to login page or display a success message
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorModalVisible(true);
      // Extract and set error message state
      setMessage(error.response.data.message);
      // Handle error, display error message to the user
    }
  };

  const closeModal = () => {
    setSuccessModalVisible(false);
    setErrorModalVisible(false);
  };

  return (
    <div className="flex justify-center items-center h-full mt-12 mb-12">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-[#2D7144] text-white px-2 py-2">Add Staff</header>
        <div className="flex justify-center items-center">
          <div className="w-full p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="firstName"
                  placeholder="Enter FirstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Enter LastName"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Middle Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="middleName"
                  placeholder="Enter MiddleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Suffix
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="suffix"
                  placeholder="Enter suffix"
                  value={formData.suffix}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email" // Use type="email" for email input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com" // Placeholder text for email input
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Position
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Date of Birth<span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Barangay:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="barangay"
                  value={formData.barangay}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Barangay</option>
                  <option value="San Isidro Norte">San Isidro Norte</option>
                  <option value="BayBay Lopez">BayBay Lopez</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2D7144] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {successModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-lg font-bold mb-4">Success!</h2>
            <p>Your registration was successful.</p>
            <p>User ID: {userId}</p> {/* Display userId */}
            <button
              className="bg-[#2D7144]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-lg font-bold mb-4">Error!</h2>
            <p>Registration failed. Please try again later.</p>
            <button
              className="bg-[#2D7144]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
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

export default AddStaff;

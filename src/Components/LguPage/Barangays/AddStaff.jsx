import React, { useState } from "react";
import axios from "axios";
import Logo from "/img/barangay-logo.png";

const AddStaff = () => {
  const [formData, setFormData] = useState({
    name: "",
    accessLevel: "barangay",
    password: "",
    barangay: "", // Initialize with an empty string
  });

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
      // Handle success, maybe redirect to login page or display a success message
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error, display error message to the user
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-[#2D7144] text-white px-2">Add Staff</header>
        <div className="flex justify-center items-center">
          <div className="">
            <img className="w-64 h-38" src={Logo} alt="Logo" />
          </div>
          <div className="w-full p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
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
    </div>
  );
};

export default AddStaff;

import React, { useState } from "react";
import axios from "axios";
import Logo from "/img/barangay-logo.png";
import { Link, Outlet } from "react-router-dom";

const CreateMunicipal = () => {
  const [formData, setFormData] = useState({
    name: "",
    accessLevel: "municipal",
    password: "",
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
    <div className="flex  items-center  flex-col pt-8">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg h-full">
        <header className="bg-[#6D2932] text-white px-2">Add Staff</header>
        <div className="flex justify-center items-center">
          <div className="">
            <img className="w-64 h-38" src={Logo} alt="Logo" />
          </div>
          <div className="w- p-8">
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
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-342 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#6D2932] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-6 ">
        <div className=" flex px text-sl justify-center ">
          <nav className="bg-[#6D2932] w-fit text-white px-4 py-2 rounded-lg ">
            <Link
              className="  hover:text-cyan-500 transition-colors duration-300"
              to="/regional/add/muni"
            >
              Municipality Staff
            </Link>
          </nav>
          <nav className="bg-[#6D2932] w-fit text-white px-2  py-2 rounded-lg">
            <Link
              className=" ml-3 mr-3 hover:text-cyan-500 transition-colors duration-300"
              to="/regional/add/barangay1"
            >
              San Isidro Norte Staff
            </Link>
          </nav>
          <nav className="bg-[#6D2932] w-fit text-white px-4 py-2 rounded-lg ">
            <Link
              className="  hover:text-cyan-500 transition-colors duration-300"
              to="/regional/add/barangay2"
            >
              Baybay Lopez Staff
            </Link>
          </nav>
          <nav className="bg-[#6D2932] w-fit text-white px-4 py-2 rounded-lg ">
            <Link
              className="  hover:text-cyan-500 transition-colors duration-300"
              to="/regional/add/citizen1"
            >
              San isidro Norte Users
            </Link>
          </nav>
          <nav className="bg-[#6D2932] w-fit text-white px-4 py-2 rounded-lg ">
            <Link
              className="  hover:text-cyan-500 transition-colors duration-300"
              to="/regional/add/citizen2"
            >
              Baybay Lopez Users
            </Link>
          </nav>
        </div>
        <div className="mt-4 mb-8  border shadow-xl rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CreateMunicipal;

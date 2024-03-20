import React, { useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Header2() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const { decodedToken } = useJwt(token);
  const [myData, setMyData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const [selectedUser, setSelectedUser] = useState(null); // State for selected user profile
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false); // State to control the change password modal
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Check if the token is valid and not expired
        if (!decodedToken) return;

        // Fetch all users
        const response = await axios.get("http://localhost:4000/api/lgu/users");
        setMyData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Fetch users only if the token is valid
    if (decodedToken) {
      fetchUsers();
    }
  }, [decodedToken]);

  const refreshPage = () => {
    window.location.reload();
  };

  const welcomeMessage = decodedToken ? ` ${decodedToken.name}` : "Welcome";

  const handleLogOut = () => {
    localStorage.removeItem("token");
    nav("/login");
    console.log("logged out");
  };

  const handleViewProfile = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/lgu/users");
      const currentUser = response.data.find(
        (user) => user.userId === decodedToken.userId
      );
      setSelectedUser(currentUser);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleChangePasswordClick = () => {
    // Show the change password modal when Change Password is clicked
    setShowChangePasswordModal(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "currentPassword") setCurrentPassword(value);
    else if (name === "newPassword") setNewPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://localhost:4000/api/lgu/change-password",
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccessMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  const handleCloseModal = () => {
    setShowChangePasswordModal(false);
    // Reset state values
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <>
      <header className="bg-white text-gray-400 py-4 drop-shadow-xl ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <h1 className="text-xl mr-4">Municipal admin</h1>
            <h1 className="text-xl">|</h1>
            <button onClick={refreshPage} className="text-xl ml-4">
              Refresh
            </button>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <h1
                className="cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
              >
                {welcomeMessage}
              </h1>
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white p-2 shadow-lg rounded-md">
                  <ul className="text-black">
                    <li>
                      <button
                        onClick={handleViewProfile}
                        className="text-black px-4 py-2 mt-2 hover:text-black hover:bg-gray-200 rounded-md font-semibold"
                      >
                        View Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleChangePasswordClick} // New option for changing password
                        className="text-black px- py-2 mt-2 hover:text-black hover:bg-gray-200 rounded-md font-semibold"
                      >
                        Change Password
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="text-black px-4 py-2 mt-2 hover:text-black hover:bg-gray-200 rounded-md font-semibold"
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 pl-6">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4 border-b-2">
              User Profile
            </h2>
            <div className=" border-gray-200 py-2">
              <p className="text-lg  font-semibold">User ID:</p>
              <p className="text-lg ">{selectedUser.userId}</p>
            </div>
            <div className="py-2">
              <p className="text-lg  font-semibold">Name:</p>
              <p className="text-lg ">
                {selectedUser.profile.firstName} {selectedUser.profile.lastName}
              </p>
            </div>
            <div className="py-2">
              <p className="text-lg  font-semibold">Position:</p>
              <p className="text-lg ">{selectedUser.profile.position}</p>
            </div>
            <div className="py-2">
              <p className="text-lg font-semibold">Access Level:</p>
              <p className="text-lg ">{selectedUser.profile.accessLevel}</p>
            </div>
            <button
              onClick={() => setSelectedUser(null)}
              className="mt-6 bg-[#2D7144] text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showChangePasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div>
            <h1 className="text-2xl text-white bg-[#2D7144]   rounded-t-lg p-2">
              Change Password
            </h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-b-lg p-4">
              <div>
                <label htmlFor="currentPassword">Current Password:</label>
                <input
                  type="password"
                  id="currentPassword"
                  className="border ml-2 rounded-lg border-gray-500 mt-1"
                  name="currentPassword"
                  value={currentPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="newPassword">New Password:</label>
                <input
                  type="password"
                  id="newPassword"
                  className="border ml-2 rounded-lg border-gray-500 mt-1"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex mt-2">
                <button
                  type="submit"
                  className="border px-2 bg-[#2D7144]   rounded-sl text-white font-bold hover:bg-blue-800 py-1 mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseModal}
                  className="border px-2  bg-[#2D7144]   rounded-sl text-white font-bold hover:bg-blue-800 py-1"
                >
                  Close
                </button>
              </div>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              {successMessage && (
                <p style={{ color: "green" }}>{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header2;

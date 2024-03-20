import React, { useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import user from "/img/user.png";

export default function CitizenSecondNav() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [showChoices, setShowChoices] = useState(false);
  const [myData, setMyData] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control the modal
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false); // State to control the change password modal
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const nav = useNavigate();

  const { decodedToken } = useJwt(token);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Check if the token is valid and not expired
        if (!decodedToken) return;

        const userId = decodedToken.userId;

        // Determine whether the user is from 4ps or senior
        const is4psUser = userId.startsWith("4ps");

        // Fetch users from the backend based on the user's role
        const response = await axios.get(`http://localhost:4000/api/4ps/users`);

        // Filter users based on the current user's userId
        const filteredUsers = response.data.filter(
          (user) => user.userId === userId
        );

        setMyData(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Fetch users only if the token is valid
    if (decodedToken) {
      fetchUsers();
    }
  }, [decodedToken]);

  const welcomeMessage = decodedToken
    ? ` ${decodedToken.firstname} ${decodedToken.lastname}`
    : "Welcome";

  const handleLogOut = () => {
    localStorage.removeItem("token");
    nav("/login");
    console.log("logged out");
  };

  const handleWelcomeClick = () => {
    setShowChoices(!showChoices);
  };

  const handleViewProfileClick = () => {
    // Show the modal when View Profile is clicked
    setShowModal(true);
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
        "http://localhost:4000/api/4ps/change-password",
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
      <header className="bg-[#6D2932] text-white py-7">
        <div className="container mx-auto text-sm flex justify-between px-6 sm:px-10 lg:px-16 relative">
          <button
            onClick={handleWelcomeClick}
            className="cursor-pointer px-3 rounded-sm hover:bg-amber-950  hover:rounded-sm "
          >
            {welcomeMessage}
          </button>
          {showChoices && (
            <div className="absolute top-full left-25 bg-white p-2 rounded shadow-md z-10 flex flex-col">
              <div>
                <button
                  onClick={handleViewProfileClick}
                  className="p-1 rounded-sm hover:bg-blue-300 text-black "
                >
                  View Info
                </button>
              </div>
              <button
                onClick={handleChangePasswordClick} // New option for changing password
                className="p-1 rounded-sm hover:bg-green-300 text-black"
              >
                Change Password
              </button>
              <div>
                <button
                  onClick={handleLogOut}
                  className="p-1 rounded-sm hover:bg-red-300 text-black"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div>
            <h1 className="text-2xl text-white bg-[#6D2932] rounded-t-lg p-2">
              User Information
            </h1>
            <div className="bg-white rounded-b-lg p-4 ">
              <div className="max-h-80 overflow-y-auto">
                {/* User Information */}

                {myData.map((user) => (
                  <div key={user._id}>
                    {user.userId.startsWith("4ps") ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                          <div>
                            <p className="text-gray-500 p-2">
                              Surname:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.surname}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              First Name:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.firstname}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Middle Name:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.middlename}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Sex:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.sex}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Barangay:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.barangay}
                              </span>
                            </p>
                          </div>

                          <div>
                            <p className="text-gray-500 p-2">
                              Birth:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.dateOfBirth}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Contact Number:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.contactNumber}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Place Of Birth:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.placeOfBirth}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Region:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.region}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Province:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.province}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              City/Municipality:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.cityMunicipality}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Postal:{" "}
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.postal}
                              </span>
                            </p>
                          </div>
                          <div className="col-span-full">
                            <p className="text-gray-500 p-2">
                              Full Address:
                              <span className="bg-gray-100 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {`${user.records.houseNumber} ${user.records.street} ${user.records.barangay}, ${user.records.cityMunicipality} ${user.records.province} ${user.records.postal}`}
                              </span>
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                          <div>
                            <p className="text-gray-500 p-2">
                              Type of Application:
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.typeOfApplication}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              ID Number:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.idNumber}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Medicine Booklet Number:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.medicineBookletNumber}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              First Name:
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.firstName}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Middle Name:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.middleName}
                              </span>
                            </p>
                          </div>

                          <div>
                            <p className="text-gray-500 p-2">
                              Last Name:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.lastName}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Age:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.age}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Sex:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.sex}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Civil Status:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.civilStatus}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Nationality:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.nationality}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Date of Birth:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.dateOfBirth}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Place of Birth:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.placeOfBirth}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Contact Person:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.contactPerson}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 p-2">
                              Contact Number:{" "}
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.contactNumber}
                              </span>
                            </p>
                          </div>
                          <div className="col-span-full">
                            <p className="text-gray-500 p-2">
                              Full Address:
                              <span className="bg-gray-200 border flex text-black rounded-md pl-2  border-gray-500 ">
                                {user.records.address}
                              </span>
                            </p>
                          </div>
                        </div>
                        ;
                      </>
                    )}
                  </div>
                ))}
                {/* Close button */}
                <div className="mt-4 text-right">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-[#6D2932] text-white text-gray-800 rounded hover:bg-gray-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showChangePasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div>
            <h1 className="text-2xl text-white bg-[#6D2932] rounded-t-lg p-2">
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
                  className="border px-2  bg-[#6D2932] rounded-sl text-white font-bold hover:bg-red-800 py-1 mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseModal}
                  className="border px-2  bg-[#6D2932] rounded-sl text-white font-bold hover:bg-red-800 py-1"
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

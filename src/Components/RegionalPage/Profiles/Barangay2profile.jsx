import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "/img/barangay-logo.png";
const Barangay2profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/lgu/users"); // Assuming your API endpoint is '/api/users'
        const filteredUsers = response.data.filter((user) =>
          user.userId.startsWith("brgy05-")
        );
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white rounded-lg shadow-md p-3 flex items-center text-gray-400"
        >
          <img src={Logo} alt="Logo" className="h-16 w-18 " />
          <div>
            <div className=" text-sm ">
              UserID:{" "}
              <div className="text-lg font-semibold text-black">
                {user.userId}
              </div>
            </div>
            <div className=" text-sm">
              Profile Name:{" "}
              <div className="text-lg font-semibold text-black">
                {user.profile.name}
              </div>
            </div>
            <div className=" text-sm">
              Access Level:{" "}
              <div className="text-lg font-semibold text-black">
                {user.profile.accessLevel}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Barangay2profile;

import React, { useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Header2() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const { decodedToken } = useJwt(token);
  const [myData, setMyData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const nav = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Check if the token is valid and not expired
        if (!decodedToken) return;

        const userId = decodedToken.userId;

        // Determine whether the user is from 4ps or senior
        const is4psUser = userId.startsWith("4ps");

        // Fetch users from the backend based on the user's role
        const response = await axios.get(`http://localhost:4000/api/lgu/users`);

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

  const refreshPage = () => {
    window.location.reload();
  };

  const welcomeMessage = decodedToken ? ` ${decodedToken.name}` : "Welcome";

  const handleLogOut = () => {
    localStorage.removeItem("token");
    nav("/login");
    console.log("logged out");
  };

  return (
    <header className="bg-white text-gray-400 py-4 drop-shadow-xl ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <h1 className="text-xl">Regional Admin</h1>
          <h1 className="ml-4 text-xl">|</h1>
          <button onClick={refreshPage} className="text-xl ml-4">
            Refresh
          </button>
        </div>
        <div>
          <h1
            className="mr-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
          >
            {welcomeMessage}
          </h1>
          {showDropdown && (
            <div className="absolute right-1 top-full bg-white mt-1 p-2 shadow-lg">
              <ul className="text-black">
                {myData.map((user) => (
                  <>
                    <li key={user._id}>{user.userId}</li>
                    <li>role: {user.profile.accessLevel}</li>
                  </>
                ))}
              </ul>
              <button
                onClick={handleLogOut}
                className="border-gray-400 text-black border px-8 hover:text-black hover:bg-gray-200 rounded-sm font-semibold"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header2;

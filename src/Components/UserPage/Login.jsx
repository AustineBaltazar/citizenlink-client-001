import React, { useState } from "react";
import lock from "/img/padlock.png";
import user from "/img/user.png";
import barangay from "/img/barangay-logo.png";
import axios from "axios";

export default function Login({ setToken }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const prefix = userId.substring(0, userId.indexOf("-") + 1);
      let endpoint = "";

      switch (prefix) {
        case "4ps30-":
        case "4ps05-":
          endpoint = "http://localhost:4000/api/4ps/login"; // Adjust the endpoint for 4ps prefixes
          break;
        case "sen30-":
        case "sen05-":
          endpoint = "http://localhost:4000/api/senior/login"; // Adjust the endpoint for sen prefixes
          break;
        case "mun2417-":
        case "brgy30-":
        case "reg1-":
          endpoint = "http://localhost:4000/api/lgu/login"; // Adjust the endpoint for other prefixes
          break;
        default:
          setError("Invalid user ID prefix.");
          return;
      }

      const response = await axios.post(endpoint, {
        userId,
        password,
      });

      const token = response.data.token;

      console.log(token);
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleLogOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center flex-col  h-screen bg-gray-200">
      <div className="flex flex-col items-center">
        <div className="">
          <img src={barangay} alt="Logo" className="w-62 h-64 pl-5" />
          <h1 className="text-5xl font-bold ">CitizenLink Portal</h1>
        </div>
      </div>
      <div className=" p-8 flex items-center justify-center border-solid bg-white mt-8 rounded-md shadow-xl ">
        <form>
          <div className="mb-4 flex flex-col justify-center items-center">
            <div className="flex items-center">
              <img src={user} alt="User Icon" className="w-4 h-4 mr-2" />
              <label htmlFor="user-id" className="block font-medium mr-28">
                User ID number
              </label>
            </div>
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              className="border p-2 w-64 rounded-xl "
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-4 flex flex-col justify-center items-center">
            <div className="flex items-center">
              <img src={lock} alt="Lock Icon" className="w-4 h-4 mr-2" />
              <label htmlFor="password" className="block font-medium mr-40">
                Password
              </label>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="border rounded-xl p-2 w-64"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleLogin}
          className="bg-[#6D2932] text-white font-bold py-2 px-12 rounded-md"
        >
          Login
        </button>
        {error && <p>{error}</p>}
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </div>
  );
}

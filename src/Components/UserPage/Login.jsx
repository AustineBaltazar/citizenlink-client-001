import React, { useState, useEffect } from "react";
import lock from "/img/padlock.png";
import user from "/img/user.png";
import barangay from "/img/barangay-logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState();

  const handleLogin = async () => {
    try {
      const prefix = userId.substring(0, userId.indexOf("-") + 1);
      let endpoint = "";

      switch (prefix) {
        case "4ps30-":
        case "4ps05-":
          endpoint = "http://localhost:4000/api/4ps/login";
          break;
        case "sen30-":
        case "sen05-":
          endpoint = "http://localhost:4000/api/senior/login";
          break;
        case "mun2417-":
        case "brgy30-":
        case "brgy05-":
        case "reg1-":
          endpoint = "http://localhost:4000/api/lgu/login";
          break;
        default:
          setError("Invalid user ID prefix.");
          return;
      }

      const response = await axios.post(endpoint, {
        userId,
        password,
      });

      const datatoken = response.data.token;
      setToken(datatoken);
      localStorage.setItem("token", datatoken);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      setError("Invalid credentials. Please try again.");
    }
  };

  useEffect(() => {
    // Define prefix here
    const prefix = userId.substring(0, userId.indexOf("-") + 1);

    // Redirect if login is successful
    if (loggedIn) {
      switch (prefix) {
        case "4ps30-":
        case "4ps05-":
        case "sen30-":
        case "sen05-":
          window.location.href = "/citizen/status";
          break;
        case "mun2417-":
          window.location.href = "/lgu/dashboard";
          break;
        case "brgy30-":
          window.location.href = "/barangay/dashboard";
          break;
        case "brgy05-":
          window.location.href = "/barangay2/dashboard";
          break;
        case "reg1-":
          window.location.href = "/regional/dashboard";
          break;
        default:
          setError("Invalid user ID prefix.");
          return;
      }
    }
  }, [loggedIn, userId]); // Make sure to include userId as a dependency

  return (
    <div className="flex items-center justify-center flex-col  h-screen bg-gray-200">
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
          {error && <p className="text-red-500 font-semibold">{error}</p>}
        </form>
      </div>
      <div className="mt-4 flex justify-center flex-col">
        <button
          onClick={handleLogin}
          className="bg-[#6D2932] text-white font-bold py-2 px-12 rounded-md"
        >
          Login
        </button>
        <div className="mt-2">
          {/* Link to the Forgot Password page */}
          <Link to="/forgot-password" className="text-blue-500 underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

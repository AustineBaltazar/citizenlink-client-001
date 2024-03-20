import React from "react";
import Slider from "./Slider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Thumb1 from "/img/thumbnails.png";
import Thumb2 from "/img/thumbnails1.png";
import Thumb3 from "/img/bin.jpg";
import user from "/img/user.png";
import list from "/img/list.png";
import link from "/img/link.png";
import facebook from "/img/facebook.png";
import video from "/img/video.png";
import padlock from "/img/padlock.png";
import calendar from "/img/calendar.png";
import { useNavigate } from "react-router-dom";
import LinksManager from "./LinksManager";
export default function Home() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Slider />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className=" bg-white p-4 m-2">
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
            <img src={calendar} alt="Logo" className="w-6 mr-2" />
            <h2>CALENDAR</h2>
          </div>
          <div className="">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
            <img src={link} alt="Logo" className="w-6 mr-2" />
            <h2>GOVERNMENT LINKS</h2>
          </div>
          <LinksManager />
        </div>
        <div className="bg-white p-4 m-2">
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
            <img src={list} alt="Logo" className="w-6 mr-2" />
            <h2>LIST OF NEWS</h2>
          </div>
          <div>
            <h3 className="bg-[#6D2932] w-fit px-4 mt-6 text-white border rounded-md  mb-6 ">
              Relevant Articles
            </h3>
          </div>
          <ul className="mb-8">
            {" "}
            <li className="mb-2">
              <a
                href="https://www.oscaportal.com/read.php?url=Who-are-eligible-for-the-DSWD-senior-citizen-social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                1. Gov't asks for small sacrifice from senior citizens
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.oscaportal.com/read.php?url=DSWD-Social-Pension-Program-for-Indigent-Senior-Citizens-2017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                2. DSWD Socail Pension Program for indigent Senior Citizen 2017
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.oscaportal.com/read.php?url=Govt-asks-for-small-sacrifice-from-senior-citizens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                3. Newly form commission for elders in the Philippines
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.oscaportal.com/read.php?url=2019/09/21/Newly-Formed-Commission-for-Elders-in-the-Philippines.html "
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                4. Who are elegible for DSWD senior citizen social pension
                program?
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 m-2">
          <a
            href="https://www.facebook.com/MunicipalityofBinmaley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Thumb3} alt="Video 2" className="w-full h-auto mb-8" />
          </a>
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
            <img src={user} alt="Logo" className="w-7 mr-2" />
            <h2>GO TO YOUR ACCOUNT</h2>
          </div>
          <div className="container flex-1">
            <div className="bg-white p-4 m-2">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="userId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User ID
                  </label>
                  <input
                    type="text"
                    id="userId"
                    name="userId"
                    placeholder="Your User ID here"
                    className="w-full p-2 border border-gray-300 rounded"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password"
                    className="w-full p-2 border border-gray-300 rounded"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <button
                    className="px-4 py-2 bg-[#6D2932] text-white rounded hover:bg-red-900"
                    onClick={handleButtonClick} // Call the function when button clicked
                  >
                    Go to Login Page
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

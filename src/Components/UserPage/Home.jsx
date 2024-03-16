import React from "react";
import Slider from "./Slider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Thumb1 from "/img/thumbnails.png";
import Thumb2 from "/img/thumbnails1.png";
import Thumb3 from "/img/facebook-thumb.png";
import user from "/img/user.png";
import list from "/img/list.png";
import link from "/img/link.png";
import facebook from "/img/facebook.png";
import video from "/img/video.png";
import padlock from "/img/padlock.png";
import calendar from "/img/calendar.png";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Slider />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
          <ul>
            <li>
              <a
                href="http://president.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Office of the President
              </a>
            </li>
            <li>
              <a
                href="http://www.ovp.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Office of the Vice President
              </a>
            </li>
            <li>
              <a
                href="https://www.senate.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Senate of the Philippines
              </a>
            </li>
            <li>
              <a
                href="http://www.congress.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                House of the Representatives
              </a>
            </li>
            <li>
              <a
                href="http://sc.judiciary.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Supreme Court
              </a>
            </li>
            <li>
              <a
                href="http://ca.judiciary.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Court of Appeals
              </a>
            </li>
            <li>
              <a
                href="http://sb.judiciary.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Sadinganbayan
              </a>
            </li>
            <li>
              <a
                href="http://www.dswd.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Department of Social Welfare and Development
              </a>
            </li>
            <li>
              <a
                href="http://www.dilg.gov.ph//"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-700 transition-colors duration-300"
              >
                Department of Interior and Local Government
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 m-2">
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
            <img src={list} alt="Logo" className="w-6 mr-2" />
            <h2>LIST OF NEWS</h2>
          </div>
          <div>
            <h3 className="bg-[#6D2932] w-fit px-4 mt-6 text-white border rounded-md  mb-6 ">
              Top News
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
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
            <img src={video} alt="Logo" className="w-6 mr-2" />
            <h2>VIDEOS</h2>
          </div>
          <div className="flex flex-row">
            <div className="m-2">
              <a
                href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Thumb1} alt="Video 1" className="w-full h-auto" />
              </a>
              <p>Senior Citizens Law</p>
            </div>
            <div className="m-2">
              <a
                href="https://www.youtube.com/watch?v=1bkSjy2IQ2M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Thumb2} alt="Video 2" className="w-full h-auto" />
              </a>
              <p>4P's Law</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 m-2">
          <a
            href="https://www.youtube.com/watch?v=1bkSjy2IQ2M"
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
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#6D2932] text-white rounded hover:bg-red-900"
                  >
                    Continue
                  </button>
                </div>
                <div className="mb-8">
                  <p className="text-gray-700">
                    or{" "}
                    <button className="text-red-700 hover:text-red-900">
                      Register ID
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

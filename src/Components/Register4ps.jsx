import React from "react";
import Empower from "./Empower";
import list from "/img/list.png";
import facebook from "/img/facebook.png";
import Thumb3 from "/img/facebook-thumb.png";
import { Link, Outlet } from "react-router-dom";
import Thumb1 from "/img/thumbnails.png";
import { useState } from "react";

export default function Register4ps() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    houseNumber: "",
    street: "",
    barangay: "",
    city: "",
    province: "",
    region: "",
    postal: "",
    contact: "",
    birthDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <Empower />
      <div className="flex mt-7">
        <div className="w-[65%] ml-16 mr-16">
          <div className="border-b-2 ">
            <h1 className="bg-red-800 w-fit text-white px-2 py-2 text-sm">
              Application form for Senior Citizen
            </h1>
          </div>

          <div className="mb-16 mt-4">
            <h1 className="flex justify-center text-3xl font-bold mt-8 mb-8">
              NON-4Ps Information Sheet
            </h1>
            <h1 className="text-3xl font-bold mt-8">Name of Applicant</h1>
            <form>
              <div>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Enter Last Name"
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label htmlFor="middleName">Middle Name *</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Enter Middle Name"
                />
              </div>
              <div>
                <label htmlFor="suffix">Suffix *</label>
                <input
                  type="text"
                  id="suffix"
                  name="suffix"
                  value={formData.suffix}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Jr. Sr. etc"
                />
              </div>

              <h1 className="text-3xl font-bold mt-8">Address</h1>
              <div>
                <label htmlFor="houseNumber">House No. *</label>
                <select
                  id="houseNumber"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Choose Options"
                >
                  <option value="male">house 1</option>
                  <option value="female">house 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="street">Street *</label>
                <select
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Choose Options"
                >
                  <option value="male">street 1</option>
                  <option value="female">street 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="barangay">Barangay *</label>
                <select
                  id="barangay"
                  name="barangay"
                  value={formData.barangay}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Choose Options"
                >
                  <option value="male">barangay 1</option>
                  <option value="female">barangay 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="city">City *</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Choose Options"
                >
                  <option value="male">city 1</option>
                  <option value="female">city 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="province">Province *</label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Choose Options"
                >
                  <option value="male">province 1</option>
                  <option value="female">province 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="region">Region *</label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Choose Options"
                >
                  <option value="male">region 1</option>
                  <option value="female">region 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="postal">Postal *</label>
                <select
                  id="postal"
                  name="postal"
                  value={formData.postal}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Choose Options"
                >
                  <option value="male">postal 1</option>
                  <option value="female">postal 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="birthDate">Birth Date *</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div>
                <label htmlFor="contact">Contact Number *</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Enter Contact Number"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-red-800 text-white px-8 py-2 rounded hover:bg-red-900"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="w-[35%] mr-32 mb-32">
          <div className="bg-white 2 ">
            <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
              <img src={facebook} alt="Logo" className="w-8 mr-2" />
              <h2>FOLLOW US ON FACEBOOK</h2>
            </div>
            <a
              href="https://www.youtube.com/watch?v=1bkSjy2IQ2M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Thumb3}
                alt="Video 2"
                className="w-full h-auto mb-16 mt-4"
              />
            </a>
          </div>
          <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex">
            <img src={list} alt="Logo" className="w-6 mr-2" />
            <h2>LIST OF NEWS</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-start">
              {/* Use items-start to align content at the top */}
              <div className="m-2 flex flex-col">
                <a
                  href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumb1} alt="Video 1" className="w-fix h-18" />
                </a>
                <p>August 12, 2023</p>
              </div>
              <p className="text-sm">
                DSWD Social Pension Program <br></br>for Indigent Senior Citizen
                2017
              </p>
            </div>
            <div className="flex flex-row items-start">
              {/* Use items-start to align content at the top */}
              <div className="m-2 flex flex-col">
                <a
                  href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumb1} alt="Video 1" className="w-fixed h-18" />
                </a>
                <p>August 12, 2023</p>
              </div>
              <p className="text-sm">
                DSWD Social Pension Program <br></br>for Indigent Senior Citizen
                2017
              </p>
            </div>
            <div className="flex flex-row items-start">
              {/* Use items-start to align content at the top */}
              <div className="m-2 flex flex-col">
                <a
                  href="https://www.youtube.com/watch?v=3jjnSO3m_a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumb1} alt="Video 1" className="w-fixed h-18" />
                </a>
                <p>August 12, 2023</p>
              </div>
              <p className="text-sm">
                DSWD Social Pension Program <br></br>for Indigent Senior Citizen
                2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Empower from "./Empower";
import axios from "axios";
import list from "/img/list.png";
import facebook from "/img/facebook.png";
import Thumb3 from "/img/facebook-thumb.png";
import Thumb1 from "/img/thumbnails.png";
import { Link, Outlet } from "react-router-dom";

export default function Register4ps() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surName: "",
    suffix: "",
    houseNumber: "",
    street: "",
    barangay: "Select Option",
    cityMunicipality: "",
    province: "Select Option",
    region: "Select Option",
    postal: "",
    contactNumber: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/4ps/submit",
        formData
      );

      console.log("Form submitted successfully:", response.data);

      // Show success alert
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error alert
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div>
      <Empower />
      <div className="flex mt-7">
        <div className="w-[65%] ml-16 mr-16">
          <div className="border-b-2 ">
            <h1 className="bg-red-800 w-fit text-white px-2 py-2 text-sm">
              Application form for
            </h1>
          </div>

          <div className="mb-16 mt-4">
            <h1 className="flex justify-center text-3xl font-bold mt-8 mb-8">
              NON-4Ps Information Sheet
            </h1>
            <h1 className="text-3xl font-bold mt-8">Name of Applicant</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="surName">Surname *</label>
                <input
                  type="text"
                  id="surName"
                  name="surName"
                  value={formData.surName}
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
                <label htmlFor="contact">House No. *</label>
                <input
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="House No./Zone/Sitio/Purok"
                />
              </div>
              <div>
                <label htmlFor="contact">Street *</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Street"
                />
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
                  <option value="Select Option" disabled>
                    Select Option
                  </option>
                  <option value="San Isidro Norte">San Isidro Norte</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact">City *</label>
                <input
                  type="text"
                  id="cityMunicipality"
                  name="cityMunicipality"
                  value={formData.cityMunicipality}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="City"
                />
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
                  <option value="Select Option" disabled>
                    Select Option
                  </option>
                  <option value="Binmaley">Binmaley</option>
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
                  <option value="Select Option" disabled>
                    Select Option
                  </option>
                  <option value="Region 1">Region 1</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact">Postal *</label>
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  value={formData.postal}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="Postal"
                />
              </div>
              <div>
                <label htmlFor="birthDate">Date Of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-black"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div>
                <label htmlFor="contact">Contact Number *</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
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

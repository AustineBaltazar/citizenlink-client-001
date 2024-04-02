import React, { useState } from "react";
import axios from "axios";

export default function FourPsForm() {
  const [formData, setFormData] = useState({
    surname: "",
    firstname: "",
    middlename: "",
    email: "",
    suffix: "",
    houseNumber: "",
    street: "",
    barangay: "",
    cityMunicipality: "",
    province: "",
    region: "",
    postal: "2417",
    dateOfBirth: "",
    contactNumber: "",
    gender: "",
    placeOfBirth: "",
    applicationStatus: "pending",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");
  const [emailError, setEmailError] = useState(""); // State to store email error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear email error when email input changes
    if (name === "email") {
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/4ps/submit",
        formData
      );
      setAccount(response.data.userId);
      console.log("Form submitted successfully:", response.data);

      setModalMessage("Form submitted successfully");
      setFormData({
        surname: "",
        firstname: "",
        middlename: "",
        email: "",
        suffix: "",
        houseNumber: "",
        street: "",
        barangay: "",
        cityMunicipality: "",
        province: "",
        region: "",
        postal: "2417",
        dateOfBirth: "",
        contactNumber: "",
        gender: "",
        placeOfBirth: "",
        applicationStatus: "pending",
      });

      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);

      // Check if the error response contains an email error
      if (error.response && error.response.data && error.response.data.error) {
        setEmailError(error.response.data.error);
      } else {
        setModalMessage("Error submitting form");
        setShowModal(true);
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };
  return (
    <div className="bg-gray-100  ">
      <div className="w-full max-w-full p-8">
        <h2 className="text-2xl mb-4 font-bold text-indigo-500 ">
          Application for NON-4Ps LIFELINER(New Applicants)
        </h2>

        <div className="bg-white py-2 px-8 shadow-md border rounded-md">
          <form onSubmit={handleSubmit} className=" gap-4">
            {/* Surname */}
            <div className="mb-4">
              <label htmlFor="surname" className="block mb-2">
                Surname<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Last Name"
              />
            </div>
            {/* Firstname */}
            <div className="mb-4">
              <label htmlFor="firstname" className="block mb-2">
                Firstname<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="First Name"
              />
            </div>
            {/* Middlename */}
            <div className="mb-4">
              <label htmlFor="middlename" className="block mb-2">
                Middlename
              </label>
              <input
                type="text"
                id="middlename"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Middle Name"
              />
            </div>
            {/* Suffix */}
            <div className="mb-4">
              <label htmlFor="suffix" className="block mb-2">
                Suffix
              </label>
              <input
                type="text"
                id="suffix"
                name="suffix"
                value={formData.suffix}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter Suffix,(e.g., Jr., Sr., III)"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="example@example.com"
              />
              {/* Display email error if exists */}
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block mb-2">
                Gender<span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* House Number */}
            <div className="mb-4">
              <label htmlFor="houseNumber" className="block mb-2">
                House Number<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="houseNumber"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter House Number"
              />
            </div>
            {/* Street */}
            <div className="mb-4">
              <label htmlFor="street" className="block mb-2">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter Street Name"
              />
            </div>
            {/* Barangay */}
            <div className="mb-4">
              <label htmlFor="barangay" className="block mb-2">
                Barangay<span className="text-red-500">*</span>
              </label>
              <select
                id="barangay"
                name="barangay"
                value={formData.barangay}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Barangay</option>
                <option value="Baybay Lopez">Baybay Lopez</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="province" className="block mb-2">
                Province<span className="text-red-500">*</span>
              </label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Province</option>
                <option value="Pangasinan">Pangasinan</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="cityMunicipality" className="block mb-2">
                City Municipality<span className="text-red-500">*</span>
              </label>
              <select
                id="cityMunicipality"
                name="cityMunicipality"
                value={formData.cityMunicipality}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select City</option>
                <option value="Binmaley">Binmaley</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="region" className="block mb-2">
                Region<span className="text-red-500">*</span>
              </label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Region</option>
                <option value="Region 1">Region 1</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block mb-2">
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="placeOfBirth" className="block mb-2">
                Place of Birth<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                required
                placeholder="City / Town"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            {/* Contact Number */}
            <div className="mb-4">
              <label htmlFor="contactNumber" className="block mb-2">
                Contact Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter Phone Number or Mobile Number"
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-[#0569B4] text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            {/* Loading indicator */}
            {loading && <p>Loading...</p>}
            {/* Modal content */}
            {!loading && (
              <>
                <button
                  className="absolute top-0 right-0 m-2"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div className="flex flex-col border-4 mb-2">
                  <p className="text-center">userId: {account}</p>
                </div>
                <p className="text-center font-bold">{modalMessage}</p>
                <button
                  className="bg-[#0569B4] text-white px-4 py-2 rounded-md mt-4 mx-auto block"
                  onClick={closeModal}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

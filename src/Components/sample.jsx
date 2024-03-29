import React, { useState } from "react";
import axios from "axios";

export default function SeniorForm() {
  const [formData, setFormData] = useState({
    typeOfApplication: "New",
    oscaId: "",
    barangay: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    sex: "",
    civilStatus: "",
    nationality: "",
    dateOfBirth: "",
    placeOfBirth: "",
    address: "",
    contactPerson: "",
    contactNumber: "",
    applicationStatus: "pending",
    picture: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "dateOfBirth") {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData({
        ...formData,
        dateOfBirth: value,
        age: age.toString(),
      });
    } else {
      if (files) {
        setFormData({
          ...formData,
          [name]: files[0],
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });

        if (errors[name]) {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      setLoading(true);

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        "http://localhost:4000/api/senior/submit",
        formDataToSend,
        config
      );
      setAccount(response.data.userId);
      console.log("Form submitted successfully:", response.data);

      setModalMessage("Form submitted successfully");

      setFormData({
        typeOfApplication: "New",
        oscaId: "",
        barangay: "",
        email: "",
        firstName: "",
        middleName: "",
        lastName: "",
        sex: "",
        civilStatus: "",
        nationality: "",
        dateOfBirth: "",
        placeOfBirth: "",
        address: "",
        contactPerson: "",
        contactNumber: "",
        applicationStatus: "pending",
        picture: null,
      });

      setShowModal(true);
      setErrors({}); // Reset errors state
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        if (errorMessage.includes("Email")) {
          setErrors((prevErrors) => ({ ...prevErrors, email: errorMessage }));
        } else if (errorMessage.includes("Age")) {
          setErrors((prevErrors) => ({ ...prevErrors, age: errorMessage }));
        } else if (errorMessage.includes("Address")) {
          setErrors((prevErrors) => ({ ...prevErrors, address: errorMessage }));
        } else if (errorMessage.includes("OSCA")) {
          setErrors((prevErrors) => ({ ...prevErrors, oscaId: errorMessage }));
        } else {
          setModalMessage("Error submitting form");
          setShowModal(true);
        }
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
    <div className="bg-gray-100  p-8">
      <h2 className="text-2xl font-bold mb-4 text-[#0569B4]">Senior Form</h2>
      <div className="bg-white py-2 px-10 shadow-md border rounded-md">
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.firstName && "border-red-500"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Middle Name */}
          <div className="mb-4">
            <label htmlFor="middleName" className="block mb-2">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.middleName && "border-red-500"
              }`}
            />
            {errors.middleName && (
              <p className="text-red-500 text-sm mt-1">{errors.middleName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.lastName && "border-red-500"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
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
              placeholder="example@example.com"
              required
              className={`w-full px-3 py-2 border   rounded-md ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* OSCA ID */}
          <div className="mb-4">
            <label htmlFor="oscaId" className="block mb-2">
              OSCA ID<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="oscaId"
              required
              name="oscaId"
              placeholder="eg. 0000"
              value={formData.oscaId}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.oscaId && "border-red-500"
              }`}
            />
            {errors.oscaId && (
              <p className="text-red-500 text-sm mt-1">{errors.oscaId}</p>
            )}
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
              className={`w-full px-3 py-2 border rounded-md ${
                errors.barangay && "border-red-500"
              }`}
            >
              <option value="">Select Barangay</option>
              <option value="San Isidro Norte">San Isidro Norte</option>
            </select>
            {errors.barangay && (
              <p className="text-red-500 text-sm mt-1">{errors.barangay}</p>
            )}
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
              className={`w-full px-3 py-2 border rounded-md ${
                errors.dateOfBirth && "border-red-500"
              }`}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
            )}
          </div>

          {/* Place of Birth */}
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
              placeholder="City / Town"
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.placeOfBirth && "border-red-500"
              }`}
            />
            {errors.placeOfBirth && (
              <p className="text-red-500 text-sm mt-1">{errors.placeOfBirth}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House/Unit Number, Street Name, Barangay/District, City/Municipality, Province "
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.address && "border-red-500"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Contact Person */}
          <div className="mb-4">
            <label htmlFor="contactPerson" className="block mb-2">
              Contact Person<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Name of Contact Person"
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.contactPerson && "border-red-500"
              }`}
            />
            {errors.contactPerson && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactPerson}
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block mb-2">
              Contact Number<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              placeholder="Number of the Contact Person"
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.contactNumber && "border-red-500"
              }`}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactNumber}
              </p>
            )}
          </div>
          {/* Picture */}
          <div className="mb-4">
            <label htmlFor="picture" className="block mb-2">
              Picture
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.picture && "border-red-500"
              }`}
            />
            {errors.picture && (
              <p className="text-red-500 text-sm mt-1">{errors.picture}</p>
            )}
          </div>

          {/* Submit button */}
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
                <p className="text-center ">{modalMessage}</p>
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

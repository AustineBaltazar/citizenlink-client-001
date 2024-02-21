import React, { useState } from "react";
import axios from "axios";

export default function FourPsForm() {
  // State variables to store form data, modal visibility, and loading state
  const [formData, setFormData] = useState({
    surname: "",
    firstname: "",
    middlename: "",
    suffix: "",
    houseNumber: "",
    street: "",
    barangay: "",
    cityMunicipality: "Binmaley",
    province: "Pangasinan",
    region: "Region 1",
    postal: "2431",
    dateOfBirth: "",
    contactNumber: "",
    applicationStatus: "pending",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set loading to true when form is submitted
      setLoading(true);
      // Send POST request to your backend API with form data
      const response = await axios.post(
        "http://localhost:4000/api/4ps/submit",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      // Update modal message
      setModalMessage("Form submitted successfully");
      // Show modal
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Update modal message
      setModalMessage("Error submitting form");
      // Show modal
      setShowModal(true);
    } finally {
      // Set loading to false after 1.5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className="bg-gray-200  ">
      <div className="w-full max-w-full p-8">
        <h2 className="text-2xl mb-4 font-bold text-[#0569B4] ">4Ps Form</h2>

        <div className="bg-white py-2 px-8 shadow-md border rounded-md">
          <form onSubmit={handleSubmit} className=" gap-4">
            {/* Surname */}
            <div className="mb-4">
              <label htmlFor="surname" className="block mb-2">
                Surname:
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* Firstname */}
            <div className="mb-4">
              <label htmlFor="firstname" className="block mb-2">
                Firstname:
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* Middlename */}
            <div className="mb-4">
              <label htmlFor="middlename" className="block mb-2">
                Middlename:
              </label>
              <input
                type="text"
                id="middlename"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* Suffix */}
            <div className="mb-4">
              <label htmlFor="suffix" className="block mb-2">
                Suffix:
              </label>
              <input
                type="text"
                id="suffix"
                name="suffix"
                value={formData.suffix}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* House Number */}
            <div className="mb-4">
              <label htmlFor="houseNumber" className="block mb-2">
                House Number:
              </label>
              <input
                type="number"
                id="houseNumber"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* Street */}
            <div className="mb-4">
              <label htmlFor="street" className="block mb-2">
                Street:
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* Barangay */}
            <div className="mb-4">
              <label htmlFor="barangay" className="block mb-2">
                Barangay:
              </label>
              <input
                type="text"
                id="barangay"
                name="barangay"
                value={formData.barangay}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block mb-2">
                Date of Birth:
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

            {/* Contact Number */}
            <div className="mb-4">
              <label htmlFor="contactNumber" className="block mb-2">
                Contact Number:
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Input"
              />
            </div>

            {/* Application Status */}

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
                <p className="text-center">{modalMessage}</p>
                <button
                  className="bg-[#561C24] text-white px-4 py-2 rounded-md mt-4 mx-auto block"
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

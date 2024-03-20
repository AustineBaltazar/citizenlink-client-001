import React, { useState } from "react";
import axios from "axios";

export default function SeniorForm2() {
  const [formData, setFormData] = useState({
    typeOfApplication: "New",
    oscaId: "",
    barangay: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      // If the field is a file input, update the formData with the selected file
      setFormData({
        ...formData,
        [name]: files[0], // Assuming single file upload
      });
    } else {
      // For regular input fields, update formData as usual
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      // Make sure the token is available
      if (!token) {
        // Handle case where token is missing (e.g., redirect to login page)
        return;
      }

      // Set the Authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Set loading to true when form is submitted
      setLoading(true);

      // Create form data object to send files along with other form fields
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send POST request to your backend API with form data
      const response = await axios.post(
        "http://localhost:4000/api/senior/submit",
        formDataToSend,
        config
      );
      setAccount(response.data.userId);
      console.log("Form submitted successfully:", response.data);
      // Update modal message
      setModalMessage("Form submitted successfully");

      // Clear form data except for picture
      setFormData({
        typeOfApplication: "New",
        oscaId: "",
        barangay: "",
        email: "",
        firstName: "",
        middleName: "",
        lastName: "",
        age: "",
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

      // Show modal
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Update modal message
      setModalMessage("Error submitting form");
      // Show modal
      setShowModal(true);
    } finally {
      // Close modal and reset loading state after 1.5 seconds
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
      <h2 className="text-2xl font-bold mb-4 text-indigo-500">Senior Form</h2>
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
              className="w-full px-3 py-2 border rounded-md"
            />
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
              className="w-full px-3 py-2 border rounded-md"
            />
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
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email" // Use type="email" for email input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com" // Placeholder text for email input
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="oscaId" className="block mb-2">
              OSCA ID
            </label>
            <input
              type="number"
              id="oscaId"
              name="oscaId"
              required
              placeholder="eg. 0000"
              value={formData.oscaId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
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
              placeholder="Select Barangay"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Barangay</option>
              <option value="Baybay Lopez">Baybay Lopez</option>
            </select>
          </div>

          {/* Age */}
          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">
              Age<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* Sex */}
          <div className="mb-4">
            <label htmlFor="sex" className="block mb-2">
              Sex<span className="text-red-500">*</span>
            </label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Civil Status */}
          <div className="mb-4">
            <label htmlFor="civilStatus" className="block mb-2">
              Civil Status<span className="text-red-500">*</span>
            </label>
            <select
              id="civilStatus"
              name="civilStatus"
              value={formData.civilStatus}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Civil Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Nationality */}
          <div className="mb-4">
            <label htmlFor="nationality" className="block mb-2">
              Nationality<span className="text-red-500">*</span>
            </label>
            <select
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Nationality</option>
              <option value="Filipino">Filipino</option>
              <option value="Other">Other</option>
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
              className="w-full px-3 py-2 border rounded-md"
            />
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
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

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
              className="w-full px-3 py-2 border rounded-md"
            />
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
              className="w-full px-3 py-2 border rounded-md"
            />
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
              className="w-full px-3 py-2 border rounded-md"
            />
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

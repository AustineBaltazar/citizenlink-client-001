import React, { useState } from "react";
import axios from "axios";

const Register1 = () => {
  const [formData, setFormData] = useState({
    typeOfApplication: "",
    idNumber: "",
    medicineBookletNumber: "",
    purchaseDTIbooklet: "",
    dateOfApplication: "",
    barangay: "",
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
    picture: null,
    contactPerson: "",
    contactNumber: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      // Make the API request using Axios with FormData for file upload
      const response = await axios.post(
        "http://localhost:4000/api/senior/submit", // Update with your server's URL
        formDataToSend
      );

      // Handle the response as needed
      console.log("API Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        APPLICATION FORM FOR OSCA ID
      </h1>
      <h2 className="text-3xl font-bold text-center mb-8">
        (Senior Citizen ID)
      </h2>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div>
          <div>
            <label className="text-xl">Type of Application:</label>
            <select
              name="typeOfApplication"
              value={formData.typeOfApplication}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg border-black"
            >
              <option value="New">New</option>
              <option value="Replacement">Replacement</option>
            </select>
          </div>

          <div>
            <label className="text-xl">ID Number:</label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg border-black"
              placeholder="--ID Number--"
            />
          </div>
        </div>

        <div className="">
          <div>
            <label className="text-xl">Medicine Booklet Number:</label>
            <input
              type="text"
              name="medicineBookletNumber"
              value={formData.medicineBookletNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg border-black"
              placeholder="--Medicine Booklet Number--"
            />
          </div>

          <div>
            <label className="text-xl">Purchase DTI Booklet:</label>
            <input
              type="text"
              name="purchaseDTIbooklet"
              value={formData.purchaseDTIbooklet}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg border-black mb-8"
              placeholder="--Purchase DTI/Booklet--"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center ">
          PERSONAL INFORMATION
        </h1>

        <div>
          <label className="text-xl">Date of Application:</label>
          <input
            type="date"
            name="dateOfApplication"
            value={formData.dateOfApplication}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
          />
        </div>

        <div>
          <label className="text-xl">Barangay:</label>
          <input
            type="text"
            name="barangay"
            value={formData.barangay}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
          />
        </div>

        <div>
          <label className="text-xl">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Enter First Name"
          />
        </div>

        <div>
          <label className="text-xl">Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Enter Middle Name"
          />
        </div>

        <div>
          <label className="text-xl">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Enter Last Name"
          />
        </div>

        <div>
          <label className="text-xl">Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Age"
          />
        </div>

        <div>
          <label className="text-xl">Sex:</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="text-xl">Civil Status:</label>
          <input
            type="text"
            name="civilStatus"
            value={formData.civilStatus}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Civil Status"
          />
        </div>

        <div>
          <label className="text-xl">Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Nationality"
          />
        </div>

        <div>
          <label className="text-xl">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
          />
        </div>

        <div>
          <label className="text-xl">Place of Birth:</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Enter Place of Birth"
          />
        </div>

        <div>
          <label className="text-xl">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Enter Address"
          />
        </div>

        <div>
          <label className="text-xl">Picture:</label>
          <input
            type="file"
            name="picture"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-lg border-black"
          />
        </div>

        <div>
          <label className="text-xl">Contact Person:</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Contact Person"
          />
        </div>

        <div>
          <label className="text-xl">Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-black"
            placeholder="Contact Number"
          />
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-red-800 text-white px-8 py-2 rounded hover:bg-red-900"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register1;

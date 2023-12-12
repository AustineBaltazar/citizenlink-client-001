import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin1 = () => {
  // State to store the form data retrieved from the server
  const [formDataList, setFormDataList] = useState([]);

  // Function to fetch form data from the server
  const fetchFormData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/senior/entries"
      );
      setFormDataList(response.data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  // Fetch form data when the component mounts
  useEffect(() => {
    fetchFormData();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="flex h-screen">
      {/* Vertical Header */}
      <div className="bg-red-800 text-white p-4 w-[12%]">
        <span className="text-3xl font-bold flex justify-center mt-4">
          ADMIN
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 mt-8 ">
        <div className="border-b-2 w-[90%] ">
          <h1 className="bg-red-800 w-fit px-4 rounded-sm text-white text-2xl">
            Senior Citizen Application
          </h1>
        </div>

        {/* Table */}
        <table className="min-w-full border mt-12">
          <thead>
            <tr>
              <th className="border p-2">Photo</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Birthday</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Town</th>
              <th className="border p-2">Barangay</th>
              <th className="border p-2">uID</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData) => (
              <tr key={formData._id}>
                <td className="border p-2">{/* Display Photo here */}</td>
                <td className="border p-2">{`${formData.firstName} ${
                  formData.middleName ? formData.middleName + " " : ""
                }${formData.lastName}`}</td>
                <td className="border p-2">{formData.dateOfBirth}</td>
                <td className="border p-2">{formData.civilStatus}</td>
                <td className="border p-2">{formData.address}</td>
                <td className="border p-2">{formData.barangay}</td>
                <td className="border p-2">{formData.idNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin1;

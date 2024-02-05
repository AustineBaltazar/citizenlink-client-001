import React, { useState, useEffect } from "react";
import axios from "axios";

const Applicants4ps2 = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [editingData, setEditingData] = useState(null);

  const fetchFormData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/4ps/forms");
      setFormDataList(response.data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  const handleEditClick = (formData) => {
    setEditingData(formData);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `http://localhost:4000/api/4ps/forms/${editingData._id}`,
        editingData
      );
      fetchFormData();
      setEditingData(null);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingData(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-screen">
      <div className="flex-grow p-4 mt-8 ">
        <div className="border-b-2 w-[90%] ">
          <h1 className="bg-red-800 w-fit px-4 rounded-sm text-white text-2xl">
            4Ps Applicants
          </h1>
        </div>

        {/* Table */}
        <table className="min-w-full border mt-12">
          <thead>
            <tr>
              <th className="border p-2">FirstName</th>
              <th className="border p-2">LastName</th>
              <th className="border p-2">MiddleName</th>
              <th className="border p-2">Barangay</th>
              <th className="border p-2">Contact</th>
              <th className="border p-2">Appointment</th>
              <th className="border p-2">Appointment Status</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData) => (
              <tr key={formData._id}>
                <td className="border p-2">{formData.firstName}</td>
                <td className="border p-2">{formData.surName}</td>
                <td className="border p-2">{formData.middleName}</td>
                <td className="border p-2">{formData.barangay}</td>
                <td className="border p-2">{formData.contactNumber}</td>
                <td>mm-dd-yyyy 00:00:00</td>
                <td className="border p-2">pending </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Modal */}
      </div>
    </div>
  );
};

export default Applicants4ps2;

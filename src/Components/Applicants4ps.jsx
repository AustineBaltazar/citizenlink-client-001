import React, { useState, useEffect } from "react";
import axios from "axios";

const Applicants4ps = () => {
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
              <th className="border p-2">Actions</th>
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
                <td className="border p-2">
                  {/* Dropdown to select Appointment Status */}
                  <select
                    value={formData.appointmentStatus || ""}
                    onChange={(e) =>
                      setFormDataList((prevList) => {
                        return prevList.map((item) =>
                          item._id === formData._id
                            ? { ...item, appointmentStatus: e.target.value }
                            : item
                        );
                      })
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Member">Member</option>
                  </select>
                </td>
                <td className="border p-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleEditClick(formData)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Modal */}
        {editingData && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8">
              <h1 className="text-2xl font-bold mb-4">Edit Information</h1>
              <form className="mt-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    FirstName
                  </label>
                  <input
                    type="text"
                    className="border p-2 w-full"
                    value={editingData.firstName}
                    onChange={(e) =>
                      setEditingData({
                        ...editingData,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    LastName
                  </label>
                  <input
                    type="text"
                    className="border p-2 w-full"
                    value={editingData.surName}
                    onChange={(e) =>
                      setEditingData({
                        ...editingData,
                        surName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    MiddleName
                  </label>
                  <input
                    type="text"
                    className="border p-2 w-full"
                    value={editingData.middleName}
                    onChange={(e) =>
                      setEditingData({
                        ...editingData,
                        middleName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Barangay
                  </label>
                  <input
                    type="text"
                    className="border p-2 w-full"
                    value={editingData.barangay}
                    onChange={(e) =>
                      setEditingData({
                        ...editingData,
                        barangay: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="border p-2 w-full"
                    value={editingData.contactNumber}
                    onChange={(e) =>
                      setEditingData({
                        ...editingData,
                        contactNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </form>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applicants4ps;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Applicants2 = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [editingData, setEditingData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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

  useEffect(() => {
    fetchFormData();
  }, []);

  const handleEditClick = (formData) => {
    setEditingData(formData);
    setIsModalOpen(true);
  };

  const handleEditFormSubmit = async () => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("picture", selectedFile);
      }
      for (const key in editingData) {
        formData.append(key, editingData[key]);
      }

      await axios.put(
        `http://localhost:4000/api/senior/entries/${editingData._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      fetchFormData();
      setEditingData(null);
      setIsModalOpen(false);
      setSelectedFile(null);
    } catch (error) {
      console.error("Error updating form data:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-grow p-4 mt-8 ">
        <div className="border-b-2 w-[90%] ">
          <h1 className="bg-red-800 w-fit px-4 rounded-sm text-white text-2xl">
            Senior Citizen Applicants
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
              <th className="border p-2">Appointment Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData) => (
              <tr key={formData._id}>
                <td className="border p-2">
                  {formData.picture && (
                    <img
                      src={`http://localhost:4000/${formData.picture}`}
                      alt="User Photo"
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  )}
                </td>
                <td className="border p-2">{`${formData.firstName} ${
                  formData.middleName ? formData.middleName + " " : ""
                }${formData.lastName}`}</td>
                <td className="border p-2">{formData.dateOfBirth}</td>
                <td className="border p-2">{formData.civilStatus}</td>
                <td className="border p-2">{formData.address}</td>
                <td className="border p-2">{formData.barangay}</td>
                <td className="border p-2">{formData.idNumber}</td>
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
                    className="px-4 py-2 bg-blue-500 text-white rounded"
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
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={customStyles}
        >
          <h2>Edit Form Data</h2>
          {editingData && (
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
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
                  Middle Name
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
                  Last Name
                </label>
                <input
                  type="text"
                  className="border p-2 w-full"
                  value={editingData.lastName}
                  onChange={(e) =>
                    setEditingData({
                      ...editingData,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  BirthDate
                </label>
                <input
                  type="text"
                  className="border p-2 w-full"
                  value={editingData.dateOfBirth}
                  onChange={(e) =>
                    setEditingData({
                      ...editingData,
                      dateOfBirth: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Town
                </label>
                <input
                  type="text"
                  className="border p-2 w-full"
                  value={editingData.address}
                  onChange={(e) =>
                    setEditingData({
                      ...editingData,
                      address: e.target.value,
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
                  uID
                </label>
                <input
                  type="text"
                  className="border p-2 w-full"
                  value={editingData.idNumber}
                  onChange={(e) =>
                    setEditingData({
                      ...editingData,
                      idNumber: e.target.value,
                    })
                  }
                />
              </div>
              {/* ... (other form fields) ... */}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handleEditFormSubmit(editingData)}
              >
                Save Changes
              </button>
            </form>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Applicants2;

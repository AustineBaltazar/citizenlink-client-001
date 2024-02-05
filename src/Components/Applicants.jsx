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

const Applicants = () => {
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
                <td className="border p-2">Pending</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Modal */}
      </div>
    </div>
  );
};

export default Applicants;

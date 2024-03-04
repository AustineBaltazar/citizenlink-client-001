import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Barangay14ps() {
  const [forms, setForms] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editable, setEditable] = useState(false); // State to track if fields are editable
  const [updatedForm, setUpdatedForm] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false); // State to track if the form is updated

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/4ps/forms");
        const data = response.data;
        const sanIsidroNorteForms = data.filter(
          (form) => form.barangay === "San Isidro Norte"
        );
        setForms(sanIsidroNorteForms);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForms();
  }, []);

  const handleApplicantClick = (applicant) => {
    setSelectedApplicant(applicant);
    setUpdatedForm({ ...applicant }); // Set initial form data for editing
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApplicant(null);
    setUpdatedForm(null); // Reset updatedForm state
    setModalOpen(false);
    setEditable(false); // Reset editable state
    setIsUpdated(false); // Reset isUpdated state
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedForm({ ...updatedForm, [name]: value });
  };

  const handleEditClick = () => {
    setEditable(true); // Enable editing
  };

  const handleEditClick2 = () => {
    setEditable(true); // Enable editing
  };

  const handleUpdateForm = async () => {
    try {
      await axios.put(
        `http://localhost:4000/api/4ps/forms/${selectedApplicant._id}`,
        updatedForm
      );
      // Update the local forms state to reflect the changes
      setForms(
        forms.map((form) =>
          form._id === selectedApplicant._id ? updatedForm : form
        )
      );
      setEditable(false); // Disable editing after update
      setIsUpdated(true); // Set the state to indicate the form has been updated
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = () => {
    setIsUpdated(false); // Reset the state when modal is closed
    closeModal(); // Close the modal
  };

  const filteredForms = forms.filter((form) =>
    `${form.firstName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <div className="bg-[#0569B4] border-l border-black border-r border-t flex flex-row-reverse ">
          <div className="mr-2 mt-1">
            <button className="rounded-l-full bg-[#0569B4] border border-white text-white px-2">
              search
            </button>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-1 py-0.7 border-r border border-gray-400 rounded-r-full w-40 "
            />
          </div>
        </div>
        <table className="table-auto border-collapse  border-gray-800 w-full border-l border-r">
          <thead>
            <tr className="bg-[#0569B4] text-white">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Birthday</th>
              <th className="px-4 py-2">Town</th>
              <th className="px-4 py-2">Barangay</th>
              <th className="px-4 py-2">Applicant Status</th>
              <th className="px-4 py-2">View Info</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map((form) => (
              <tr key={form._id} className="border-b border-gray-300">
                <td className="px-4 py-2 text-center">{`${form.firstname} ${form.surname}`}</td>
                <td className="px-4 py-2 text-center">{form.dateOfBirth}</td>
                <td className="px-4 py-2 text-center">
                  {form.cityMunicipality}
                </td>
                <td className="px-4 py-2 text-center">{form.barangay}</td>
                <td className="px-4 py-2 text-center">
                  {form.applicationStatus}
                </td>

                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleApplicantClick(form)}
                    className="px-2 bg-gray-200 border rounded-sl border-black"
                  >
                    View Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && selectedApplicant && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white  rounded-2xl shadow-lg">
            <h1 className="text-xl font-semibold  bg-[#0569B4] text-white py-4 px-2 rounded-t-2xl flex justify-center ">
              Applicant Information
            </h1>
            <div className="p-8">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="font-semibold">First Name:</p>
                  <input
                    type="text"
                    name="firstname"
                    value={updatedForm.firstname}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable} // Enable/disable editing based on editable state
                  />
                </div>
                <div>
                  <p className="font-semibold">Middle Name:</p>
                  <input
                    type="text"
                    name="middlename"
                    value={updatedForm.middlename}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Surname:</p>
                  <input
                    type="text"
                    name="surname"
                    value={updatedForm.surname}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Suffix:</p>
                  <input
                    type="text"
                    name="suffix"
                    value={updatedForm.suffix}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">House Number:</p>
                  <input
                    type="number"
                    name="houseNumber"
                    value={updatedForm.houseNumber}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Street:</p>
                  <input
                    type="text"
                    name="street"
                    value={updatedForm.street}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Barangay:</p>
                  <input
                    type="text"
                    name="barangay"
                    value={updatedForm.barangay}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">City Municipality:</p>
                  <input
                    type="text"
                    name="cityMunicipality"
                    value={updatedForm.cityMunicipality}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Province:</p>
                  <input
                    type="text"
                    name="province"
                    value={updatedForm.province}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Region:</p>
                  <input
                    type="text"
                    name="region"
                    value={updatedForm.region}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Postal:</p>
                  <input
                    type="text"
                    name="postal"
                    value={updatedForm.postal}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">Date Of Birth:</p>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={updatedForm.dateOfBirth}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>
                <div>
                  <p className="font-semibold">ContactNumber:</p>
                  <input
                    type="text"
                    name="contactNumber"
                    value={updatedForm.contactNumber}
                    onChange={handleInputChange}
                    className="border px-2 border-black rounded-lg"
                    readOnly={!editable}
                  />
                </div>

                <div>
                  <p className="font-semibold">Applicant Status:</p>
                  <p className="border px-2 border-black rounded-lg">
                    {updatedForm.applicationStatus}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                {!editable && (
                  <button
                    onClick={handleEditClick}
                    className="bg-[#0569B4] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mr-2"
                  >
                    Edit
                  </button>
                )}
                {editable && (
                  <>
                    <button
                      onClick={handleUpdateForm}
                      className="bg-[#0569B4] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={handleEditClick2}
                      className="bg-[#0569B4] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mr-2"
                    >
                      Close Edit
                    </button>
                  </>
                )}
                <button
                  onClick={closeModal}
                  className="bg-[#0569B4] text-white hover:bg-gray-400 p-2 border border-black rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isUpdated && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Updated</h2>
            <button
              onClick={handleModalClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

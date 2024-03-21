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
  const formsPerPage = 20; // Define formsPerPage here
  const [selectedStatus, setSelectedStatus] = useState(null); // State to track selected status
  const [showDropdown, setShowDropdown] = useState(false); // State to track vi
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/4ps/forms");
        const data = response.data;
        const sanIsidroNorteForms = data.filter(
          (form) => form.barangay === "Baybay Lopez"
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
    // If the input field is for dateOfBirth, format the value to "yyyy-MM-dd"
    const formattedValue = name === "dateOfBirth" ? formatDate(value) : value;
    setUpdatedForm({ ...updatedForm, [name]: formattedValue });
  };

  // Function to format date to "yyyy-MM-dd"
  const formatDate = (dateString) => {
    // Check if the provided string is in the ISO format
    if (dateString.includes("T")) {
      // If it's in ISO format, extract the date part and return
      return dateString.split("T")[0];
    } else {
      // If it's not in ISO format, assume it's already in "yyyy-MM-dd" format
      return dateString;
    }
  };

  const handleEditClick = () => {
    setEditable(true); // Enable editing
  };

  const handleEditClick2 = () => {
    setEditable(true); // Enable editing
  };

  const handleUpdateForm = async () => {
    try {
      // Ensure that the dateOfBirth field is properly formatted before sending the update
      const formattedUpdatedForm = {
        ...updatedForm,
        dateOfBirth: formatDate(updatedForm.dateOfBirth),
        applicationStatus: "updated",
      };

      await axios.put(
        `http://localhost:4000/api/4ps/forms/${selectedApplicant._id}`,
        formattedUpdatedForm
      );

      setForms(
        forms.map((form) =>
          form._id === selectedApplicant._id ? formattedUpdatedForm : form
        )
      );
      setEditable(false);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = () => {
    setIsUpdated(false);
    closeModal();
  };

  const filteredForms = forms.filter((form) =>
    searchTerm
      ? `${form.firstname} ${form.surname}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      : true
  );

  const handleStatusHeaderClick = () => {
    setShowDropdown(!showDropdown); // Toggle visibility of dropdown
  };

  const handleStatusOptionClick = (status) => {
    setSelectedStatus(status); // Update selected status
    setShowDropdown(false); // Hide dropdown
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-blue-500  border-black text-white opacity-80";
      case "on review":
        return "bg-yellow-500  border-black text-white opacity-80";
      case "incomplete":
        return "bg-red-500 border-black text-white opacity-80";
      case "not eligible":
        return "bg-gray-500  border-black text-white opacity-80";
      case "eligible":
        return "bg-orange-500  border-black text-white opacity-80";
      case "rejected":
        return "bg-red-950  border-black text-white opacity-80";
      case "approved":
        return "bg-green-700  border-black text-white opacity-80";
      case "updated":
        return "bg-green-500 border-black text-white opacity-80";
      default:
        return "bg-white  border-black";
    }
  };

  const sortedForms = filteredForms
    .filter(
      (form) => !selectedStatus || form.applicationStatus === selectedStatus
    ) // Filter forms based on selected status
    .slice()
    .sort((a, b) => {
      if (a.applicationStatus < b.applicationStatus) return -1;
      if (a.applicationStatus > b.applicationStatus) return 1;
      return 0;
    });

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <div className="bg-indigo-500 border-l border-black border-r border-t flex flex-row-reverse ">
          <div className="mr-2 mt-1">
            <button className="rounded-l-full bg-indigo-500 border border-white text-white px-2">
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
            <tr className="bg-indigo-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Birthday</th>
              <th className="px-4 py-2">Town</th>
              <th className="px-4 py-2">Barangay</th>
              <th className="px-4 py-2" onClick={handleStatusHeaderClick}>
                {/* Table header for status */}
                Application Status{" "}
                {showDropdown && (
                  // Dropdown for status options
                  <div className="absolute bg-white rounded-md shadow-lg text-gray-500 mt-1 w-40 z-10">
                    {/* Option for showing all statuses */}
                    <div
                      key="all"
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleStatusOptionClick(null)} // Passing null to indicate showing all statuses
                    >
                      All
                    </div>
                    {/* Other status options */}
                    {[
                      "pending",
                      "on review",
                      "incomplete",
                      "not eligible",
                      "eligible",
                      "rejected",
                      "approved",
                      "updated",
                    ].map((status) => (
                      <div
                        key={status}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleStatusOptionClick(status)}
                      >
                        {status}
                      </div>
                    ))}
                  </div>
                )}
              </th>
              <th className="px-4 py-2">View Info</th>
            </tr>
          </thead>
          <tbody>
            {sortedForms.map((form) => (
              <tr key={form._id} className="border-b border-gray-300">
                <td className="px-4 py-2 text-center">{`${form.firstname} ${form.surname}`}</td>
                <td className="px-4 py-2 text-center">
                  {formatDate(form.dateOfBirth)}
                </td>
                <td className="px-4 py-2 text-center">
                  {form.cityMunicipality}
                </td>
                <td className="px-4 py-2 text-center">{form.barangay}</td>
                <td
                  className={`px-4 py-2 text-center ${getStatusColorClass(
                    form.applicationStatus
                  )}`}
                >
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
        <ul className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(forms.length / formsPerPage) }).map(
            (_, index) => (
              <li key={index} className="mx-1">
                <button
                  onClick={() => paginate(index + 1)}
                  className={`${
                    sortedForms === index + 1
                      ? "bg-gray-700 text-white"
                      : "bg-gray-300 text-gray-800"
                  } px-4 py-2 rounded`}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      {modalOpen && selectedApplicant && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white  rounded-2xl shadow-lg">
            <h1 className="text-xl font-semibold  bg-indigo-500 text-white py-4 px-2 rounded-t-2xl flex justify-center ">
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
                    type="text"
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
                    className="bg-indigo-500 text-white hover:bg-gray-400 p-2 border border-black rounded-lg mr-2"
                  >
                    Edit
                  </button>
                )}
                {editable && (
                  <>
                    <button
                      onClick={handleUpdateForm}
                      className="bg-indigo-500 text-white hover:bg-gray-400 p-2 border border-black rounded-lg mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={handleEditClick2}
                      className="bg-indigo-500 text-white hover:bg-gray-400 p-2 border border-black rounded-lg mr-2"
                    >
                      Close Edit
                    </button>
                  </>
                )}
                <button
                  onClick={closeModal}
                  className="bg-indigo-500 text-white hover:bg-gray-400 p-2 border border-black rounded-lg"
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
              className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

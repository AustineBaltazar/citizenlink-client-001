import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Barangay1Senior() {
  const [forms, setForms] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editable, setEditable] = useState(false);
  const [updatedForm, setUpdatedForm] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const formsPerPage = 15;
  const [showValidDocs, setShowValidDocs] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleValidDocs = () => {
    setShowValidDocs(!showValidDocs); // Toggle the visibility state
  };

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/senior/entries"
        );
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
    setUpdatedForm({ ...applicant });
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApplicant(null);
    setUpdatedForm(null);
    setModalOpen(false);
    setEditable(false);
    setIsUpdated(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchTerm(value);
  };
  const formatDate = (dateString) => {
    if (dateString.includes("T")) {
      return dateString.split("T")[0];
    } else {
      return dateString;
    }
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleEditClick2 = () => {
    setEditable(false);
  };

  const handleUpdateForm = async () => {
    try {
      const formattedUpdatedForm = {
        ...updatedForm,
        dateOfBirth: formatDate(updatedForm.dateOfBirth),
        applicationStatus: "updated",
      };

      await axios.put(
        `http://localhost:4000/api/senior/entries/${selectedApplicant._id}`,
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
      ? `${form.firstName} ${form.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        form.userId.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  const handleStatusHeaderClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleStatusOptionClick = (status) => {
    setSelectedStatus(status);
    setShowDropdown(false);
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
    )
    .slice((currentPage - 1) * formsPerPage, currentPage * formsPerPage)
    .sort((a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
      const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <div className="bg-indigo-500 border-l border-black border-r border-t flex flex-row-reverse">
          <div className="mr-2 mt-1">
            <button className="rounded-l-full bg-indigo-500 border border-white text-white px-2">
              search
            </button>
            <input
              type="text"
              placeholder="Search by Name or User ID"
              value={searchTerm}
              onChange={handleInputChange}
              className="px-1 py-0.7 border-r border border-gray-400 rounded-r-full w-60"
            />
          </div>
        </div>

        <table className="table-auto border-collapse border-gray-800 w-full border-l border-r">
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Osca ID</th>
              <th className="px-4 py-2 flex-col flex">
                Birthdate{" "}
                <span className="text-gray-400 text-sm">yyyy/mm/dd</span>
              </th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2" onClick={handleStatusHeaderClick}>
                Application Status{" "}
                {showDropdown && (
                  <div className="absolute bg-white rounded-md shadow-lg text-gray-500 mt-1 w-40 z-10">
                    <div
                      key="all"
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleStatusOptionClick(null)}
                    >
                      All
                    </div>

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
            {sortedForms
              .filter((form) => form.applicationStatus !== "on review")
              .map((form, index) => (
                <tr
                  key={form._id}
                  className={`px-4 py-2 text-center border border-gray-800 ${
                    form.isAlive ? "" : "bg-gray-300 text-gray-500"
                  }`}
                >
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{`${form.firstName} ${form.lastName}`}</td>
                  <td className="px-4 py-2 text-center">{form.userId}</td>
                  <td className="px-4 py-2 text-center">{form.oscaId}</td>
                  <td className="px-4 py-2 text-center">{form.dateOfBirth}</td>
                  <td className="px-4 py-2 text-center">{form.gender}</td>
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
          {Array.from({
            length: Math.ceil(filteredForms.length / formsPerPage),
          }).map((_, index) => (
            <li key={index} className="mx-1">
              <button
                onClick={() => setCurrentPage(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-gray-700 text-white"
                    : "bg-gray-300 text-gray-800"
                } px-4 py-2 rounded`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {modalOpen && selectedApplicant && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-auto">
          <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full">
            <div className="text-xl font-semibold bg-indigo-500 text-white py-4 px-2 rounded-t-2xl flex justify-between">
              <h1 className="flex justify-center items-center">
                Applicant Information
              </h1>
              <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
                <img
                  src={`http://localhost:4000/${selectedApplicant.picture}`}
                  alt="Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 overflow-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <p className="font-semibold">First Name:</p>
                  <input
                    type="text"
                    name="firstName"
                    value={updatedForm.firstName}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Middle Name:</p>
                  <input
                    type="text"
                    name="middleName"
                    value={updatedForm.middleName}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Last Name:</p>
                  <input
                    type="text"
                    name="lastName"
                    value={updatedForm.lastName}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Age:</p>
                  <input
                    type="number"
                    name="age"
                    value={updatedForm.age}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Gender:</p>
                  <input
                    type="text"
                    name="sex"
                    value={updatedForm.sex}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Civil Status:</p>
                  <input
                    type="text"
                    name="civilStatus"
                    value={updatedForm.civilStatus}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Nationality:</p>
                  <input
                    type="text"
                    name="nationality"
                    value={updatedForm.nationality}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Date Of Birth:</p>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={updatedForm.dateOfBirth}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Place Of Birth:</p>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={updatedForm.placeOfBirth}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Address:</p>
                  <input
                    type="text"
                    name="address"
                    value={updatedForm.address}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold">Contact Person:</p>
                  <input
                    type="text"
                    name="contactPerson"
                    value={updatedForm.contactPerson}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Contact Number:</p>
                  <input
                    type="number"
                    name="contactNumber"
                    value={updatedForm.contactNumber}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">OSCA ID</p>
                  <input
                    type="text"
                    name="oscaId"
                    value={updatedForm.oscaId}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold">Date Of Application:</p>
                  <input
                    type="text"
                    name="dateOfApplication"
                    value={updatedForm.createdAt}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Barangay:</p>
                  <input
                    type="text"
                    name="barangay"
                    value={updatedForm.barangay}
                    onChange={handleInputChange}
                    className="border-b border-gray-400"
                    readOnly={!editable}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Email:</p>
                  <p className="border-b border-gray-400">
                    {updatedForm.email}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Applicant Status:</p>
                  <p className="border-b border-gray-400">
                    {updatedForm.applicationStatus}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">ValidDocs:</p>
                  {showValidDocs && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-auto">
                      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
                        <img
                          src={`http://localhost:4000/${selectedApplicant.validDocs}`}
                          alt="Valid Docs"
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={toggleValidDocs}
                          className="bg-[#0569B4] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mt-4"
                        >
                          {showValidDocs
                            ? "Hide Valid Docs"
                            : "Show Valid Docs"}
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={toggleValidDocs}
                    className="bg-[#0569B4] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mt-4"
                  >
                    {showValidDocs ? "Hide Valid Docs" : "Show Valid Docs"}
                  </button>
                </div>
              </div>
              {/* Buttons */}
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
      {/* Update success modal */}
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

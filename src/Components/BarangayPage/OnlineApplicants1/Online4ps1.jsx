import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Lgu4ps1() {
  const [forms, setForms] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const formsPerPage = 15;

  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchTerm(value);
  };

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

  const handleStatusChange = async (id, newStatus) => {
    const confirmed = window.confirm(
      "Are you sure you want to change the application status?"
    );

    if (confirmed) {
      try {
        await axios.put(`http://localhost:4000/api/4ps/forms/${id}`, {
          applicationStatus: newStatus,
        });

        setForms(
          forms.map((form) =>
            form._id === id ? { ...form, applicationStatus: newStatus } : form
          )
        );
      } catch (error) {
        console.error("Error updating status:", error);
      }
    }
  };

  const handleApplicantClick = (applicant) => {
    setSelectedApplicant(applicant);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApplicant(null);
    setModalOpen(false);
  };

  const filteredForms = forms.filter((form) =>
    searchTerm
      ? `${form.firstname} ${form.surname}`
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

  const sortedForms = filteredForms
    .filter(
      (form) => !selectedStatus || form.applicationStatus === selectedStatus
    )
    .slice((currentPage - 1) * formsPerPage, currentPage * formsPerPage)
    .sort((a, b) => {
      const nameA = `${a.firstname} ${a.surname}`.toUpperCase();
      const nameB = `${b.firstname} ${b.surname}`.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto  bg-white">
        <div className="overflow-x-auto">
          <div className="bg-[#0569B4] border-l border-black border-r border-t flex flex-row-reverse">
            <div className="mr-2 mt-1">
              <button className="rounded-l-full bg-[#0569B4] border border-white text-white px-2">
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

          <table className="table-auto border-collapse  border-gray-800 w-full border-l border-r">
            <thead>
              <tr className="bg-[#0569B4] text-white">
                <th className="px-4 py-2">No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">User ID</th>
                <th className="px-4 py-2 flex-col flex">
                  Birthdate{" "}
                  <span className="text-gray-400 text-sm">yyyy/mm/dd</span>
                </th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2" onClick={handleStatusHeaderClick}>
                  {/* Table header for status */}
                  Verify
                  {showDropdown && (
                    // Dropdown for status options
                    <div className="absolute bg-white rounded-md shadow-lg text-gray-500 mt-1 w-40 z-10"></div>
                  )}
                </th>
                <th className="px-4 py-2">View Info</th>
              </tr>
            </thead>
            <tbody>
              {sortedForms
                .filter(
                  (form) =>
                    form.applicationStatus !== "eligible" &&
                    form.applicationStatus !== "pending" &&
                    form.applicationStatus !== "incomplete" &&
                    form.applicationStatus !== "eligible" &&
                    form.applicationStatus !== "rejected" &&
                    form.applicationStatus !== "approved" &&
                    form.applicationStatus !== "updated"
                )
                .map((form, index) => (
                  <tr key={form._id} className="border-b border-gray-300">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{`${form.firstname} ${form.surname}`}</td>
                    <td className="px-4 py-2 text-center">{form.userId}</td>
                    <td className="px-4 py-2 text-center">
                      {form.dateOfBirth}
                    </td>
                    <td className="px-4 py-2 text-center">{form.gender}</td>

                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleStatusChange(form._id, "pending")}
                        className="bg-green-500 text-white px-2 py-1 rounded-full mr-2"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(form._id, "incomplete")
                        }
                        className="bg-red-500 text-white px-2 py-1 rounded-full"
                      >
                        Reject
                      </button>
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
          <ul className="flex justify-center mt-4 bg-gray-100">
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
              <div className="text-xl font-semibold bg-[#0569B4] text-white py-4 px-2 rounded-t-2xl flex justify-between">
                <h1 className="flex justify-center items-center">
                  Applicant Information
                </h1>
              </div>
              <div className="p-4 overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">First Name:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.firstname}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Middle Name:</p>
                    <p
                      className={`border-b ${
                        !selectedApplicant.middlename ? "text-gray-300" : ""
                      } border-gray-400`}
                    >
                      {selectedApplicant.middlename
                        ? selectedApplicant.middlename
                        : "n/a"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Surname:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.surname}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Suffix:</p>
                    <p
                      className={`border-b ${
                        !selectedApplicant.suffix ? "text-gray-300" : ""
                      } border-gray-400`}
                    >
                      {selectedApplicant.suffix
                        ? selectedApplicant.suffix
                        : "n/a"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">House Number:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.houseNumber}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Street:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.street}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Barangay:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.barangay}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">City Municipality:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.cityMunicipality}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Province:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.province}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Region:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.region}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Postal:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.postal}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Date Of Birth:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.dateOfBirth}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">ContactNumber:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.contactNumber}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Email:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.email}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Applicant Status:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.applicationStatus}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-[#0569B4] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

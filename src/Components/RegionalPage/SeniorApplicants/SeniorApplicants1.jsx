import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SeniorApplicants1 = () => {
  const [forms, setForms] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const formsPerPage = 20; // Define formsPerPage here
  const [selectedStatus, setSelectedStatus] = useState(null); // State to track selected status
  const [showDropdown, setShowDropdown] = useState(false); // State
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/senior/entries"
        );
        const data = response.data;

        // Filter forms to include only those with application statuses 'eligible', 'rejected', or 'approved' and barangay 'San Isidro Norte'
        const filteredForms = data.filter(
          (form) =>
            form.applicationStatus &&
            form.applicationStatus !== "incomplete" &&
            ["eligible", "rejected", "approved"].includes(
              form.applicationStatus
            ) &&
            form.barangay === "San Isidro Norte"
        );

        setForms(filteredForms);
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
        await axios.put(`http://localhost:4000/api/senior/entries/${id}`, {
          applicationStatus: newStatus,
        });
        // Assuming successful update, update the local state to reflect changes
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
      ? `${form.firstName} ${form.lastName}`
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

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto  bg-white">
        <div className="overflow-x-auto">
          <div className="bg-[#6D2932] border-l border-black border-r border-t flex flex-row-reverse ">
            <div className="mr-2 mt-1">
              <button className="rounded-l-full bg-[#6D2932] border border-white text-white px-2">
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
          <table className="table-auto border-collapse  border-l border-r border-gray-800 w-full">
            <thead>
              <tr className="bg-[#6D2932] text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Sex</th>
                <th className="px-4 py-2">Contact Number</th>
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
                      {["eligible", "rejected", "approved"].map((status) => (
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
                <th className="px-4 py-2">View Form</th>
              </tr>
            </thead>
            <tbody>
              {sortedForms.map((form) => (
                <tr
                  key={form._id}
                  className={`px-4 py-2 text-center border border-gray-800 ${
                    form.isAlive ? "" : "bg-gray-300 text-gray-500"
                  }`}
                >
                  <td className="px-4 py-2 text-center">{`${form.firstName} ${form.lastName}`}</td>
                  <td className="px-4 py-2 text-center">{form.age}</td>
                  <td className="px-4 py-2 text-center">{form.sex}</td>
                  <td className="px-4 py-2 text-center">
                    {form.contactNumber}
                  </td>
                  <td className="px-4 py-2 text-center">{form.barangay}</td>

                  <td
                    className={`px-4 py-2 text-center ${getStatusColorClass(
                      form.applicationStatus
                    )}`}
                  >
                    <select
                      value={form.applicationStatus}
                      className="text-black"
                      onChange={(e) =>
                        handleStatusChange(form._id, e.target.value)
                      }
                    >
                      {["eligible", "rejected", "approved"].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
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
            <div className="bg-white rounded-2xl shadow-lg">
              <h1 className="text-xl font-semibold bg-[#6D2932] text-white py-4 px-2 rounded-t-2xl flex justify-center ">
                Applicant Information
              </h1>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold">First Name:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.firstName}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Middle Name:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.middleName}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Last Name:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Age:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.age}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Sex:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.sex}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Barangay:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.barangay}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Contact Number:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.contactNumber}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Contact Person:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.contactPerson}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">OSCA ID:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.oscaId}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Date Of Application:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.createdAt}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Nationality:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.nationality}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Date Of Birth:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.dateOfBirth}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Place Of Birth:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.placeOfBirth}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.address}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Picture:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.picture}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Application Status:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.applicationStatus}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="bg-[#6D2932] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mt-4"
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
};

export default SeniorApplicants1;

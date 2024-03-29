import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SeniorApplicants1 = () => {
  const [forms, setForms] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const formsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/senior/entries"
        );
        const data = response.data;

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
    console.log(applicant);
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
      const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
      const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
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
                className="px-1 py-0.7 border-r border border-gray-400 rounded-r-full w-40 text-black"
              />
            </div>
          </div>
          <table className="table-auto border-collapse  border-l border-r border-gray-800 w-full">
            <thead>
              <tr className="bg-[#6D2932] text-white">
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
              {sortedForms.map((form, index) => (
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
                  <td className="px-4 py-2 text-center">{form.sex}</td>

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
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full">
              <div className="text-xl font-semibold bg-[#6D2932] text-white py-4 px-2 rounded-t-2xl flex justify-between">
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
                    <p className="border-b border-gray-400">
                      {selectedApplicant.firstName}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Middle Name:</p>
                    <p
                      className={`border-b ${
                        !selectedApplicant.middleName ? "text-gray-300" : ""
                      } border-gray-400`}
                    >
                      {selectedApplicant.middleName
                        ? selectedApplicant.middleName
                        : "n/a"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Last Name:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.lastName}
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
                    <p className="font-semibold">Age:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.age}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Gender:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.sex}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Barangay:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.barangay}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Contact Number:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.contactNumber}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Contact Person:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.contactPerson}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">OSCA ID:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.oscaId}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Date Of Application:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.createdAt}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Nationality:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.nationality}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Date Of Birth:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.dateOfBirth}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Place Of Birth:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.placeOfBirth}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Address:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.address}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Email:</p>
                    <p className="border-b border-gray-400">
                      {selectedApplicant.email}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">Application Status:</p>
                    <p className="border-b border-gray-400">
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

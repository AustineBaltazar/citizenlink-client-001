import React, { useState, useEffect } from "react";
import axios from "axios";

const FourPsApplicant2 = () => {
  const [forms, setForms] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/4ps/forms");
        const data = response.data;
        const sanIsidroNorteForms = data.filter(
          (form) => form.barangay === "San Isidro Sur"
        );
        setForms(sanIsidroNorteForms);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForms();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:4000/api/4ps/forms/${id}`, {
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
    `${form.firstname} ${form.surname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto  bg-white">
        <div className="overflow-x-auto">
          <div className="bg-[#6D2932] border-l border-black border-r border-t flex flex-row-reverse ">
            <div className="mr-2 mt-1">
              <button className="rounded-l-full bg-[#6D2932] border border-black text-white px-2">
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
          <table className="table-auto border-collapse  border-gray-800 w-full border-l border-r ">
            <thead>
              <tr className="bg-[#6D2932] text-white">
                <th className="px-4 py-2">Name</th>
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
                    <select
                      value={form.applicationStatus}
                      onChange={(e) =>
                        handleStatusChange(form._id, e.target.value)
                      }
                    >
                      {["pending", "rejected", "approved"].map((status) => (
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
        </div>
        {modalOpen && selectedApplicant && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white  rounded-2xl shadow-lg">
              <h1 className="text-xl font-semibold  bg-[#6D2932] text-white py-4 px-2 rounded-t-2xl flex justify-center ">
                Applicant Information
              </h1>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="font-semibold">First Name:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.firstname}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Middle Name:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.middlename}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Surname:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.surname}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Suffix:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.suffix}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">House Number:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.houseNumber}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Street:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.street}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Barangay:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.barangay}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">City Municipality:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.cityMunicipality}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Province:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.province}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Region:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.region}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Postal:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.postal}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Date Of Birth:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.dateOfBirth}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">ContactNumber:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.contactNumber}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Applicant Status:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.applicationStatus}
                    </p>
                  </div>

                  {/* Add additional fields as needed */}
                </div>
                <button
                  onClick={closeModal}
                  className="bg-[#6D2932] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mt-4  "
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

export default FourPsApplicant2;

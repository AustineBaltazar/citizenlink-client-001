import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LguSenior1() {
  const [forms, setForms] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/senior/entries"
        );
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
    `${form.firstName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto  bg-white">
        <div className="overflow-x-auto">
          <div className="bg-[#2D7144] border-l border-black border-r border-t flex flex-row-reverse ">
            <div className="mr-2 mt-1">
              <button className="rounded-l-full bg-[#2D7144] border border-white text-white px-2">
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
              <tr className="bg-[#2D7144] text-white">
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Sex</th>
                <th className="px-4 py-2">Contact Number</th>
                <th className="px-4 py-2">Barangay</th>

                <th className="px-4 py-2">Applicant Status</th>
                <th className="px-4 py-2">View Form</th>
              </tr>
            </thead>
            <tbody>
              {filteredForms.map((form) => (
                <tr key={form._id} className="border-b border-gray-300">
                  <td className="px-4 py-2 text-center">{form.firstName}</td>
                  <td className="px-4 py-2 text-center">{form.lastName}</td>
                  <td className="px-4 py-2 text-center">{form.age}</td>
                  <td className="px-4 py-2 text-center">{form.sex}</td>
                  <td className="px-4 py-2 text-center">
                    {form.contactNumber}
                  </td>
                  <td className="px-4 py-2 text-center">{form.barangay}</td>

                  <td className="px-4 py-2 text-center">
                    <select
                      value={form.applicationStatus}
                      onChange={(e) =>
                        handleStatusChange(form._id, e.target.value)
                      }
                    >
                      {[
                        "pending",
                        "on review",
                        "incomplete",
                        "not eligible",
                        "eligible",
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button onClick={() => handleApplicantClick(form)}>
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
            <div className="bg-white rounded-2xl shadow-lg">
              <h1 className="text-xl font-semibold bg-[#2D7144] text-white text-black py-4 px-2 rounded-t-2xl flex justify-center ">
                Applicant Information
              </h1>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold">Type Of Application</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.typeOfApplication}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">First Name:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.firstName}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Last Name:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.lastName}
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
                    <p className="font-semibold">ID Number:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.idNumber}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Medicine Booklet Number:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.medicineBookletNumber}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Purchase DTI booklet:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.purchaseDTIbooklet}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Date Of Application:</p>
                    <p className="border px-2 border-black rounded-lg">
                      {selectedApplicant.dateOfApplication}
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
                  className="bg-[#2D7144] text-white hover:bg-gray-400 p-2 border border-black rounded-lg mt-4"
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
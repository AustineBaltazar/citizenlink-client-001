// AcceptedApplicantsTable.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const AcceptedApplicantsTable = ({ handleCloseModal }) => {
  const [acceptedApplicants, setAcceptedApplicants] = useState([]);

  useEffect(() => {
    const fetchAcceptedApplicants = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/4ps/forms");
        const data = response.data;
        const acceptedApplicantsData = data.filter(
          (applicant) =>
            applicant.applicationStatus === "approved" &&
            applicant.barangay === "San Isidro Norte"
        );
        setAcceptedApplicants(acceptedApplicantsData);
      } catch (error) {
        console.error("Error fetching accepted applicants:", error);
      }
    };

    fetchAcceptedApplicants();
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white py-4 px-16 rounded-lg">
        <div className="flex justify-end">
          <button onClick={handleCloseModal}>&times;</button>
        </div>
        <div className="flex justify-center items-center flex-col mb-8">
          <h2 className="mt-1 font-semibold ">BARANGAY 4Ps ASSOCIATION</h2>
          <h2 className="mt-1 font-semibold ">Barangay San Isidro Norte</h2>
          <h2 className="mt-1 font-semibold ">Binamaley, Pangasinan</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 text-center py-2">No.</th>
              <th className="border px-28 text-center py-2">Name</th>

              <th className="border px-28 text-center py-2">B/D</th>
              {/* Add other table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {acceptedApplicants.map((applicant, index) => (
              <tr key={applicant._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2 text-center">{`${applicant.firstname} ${applicant.surname}`}</td>

                <td className="border px-4 py-2 text-center">
                  {applicant.dateOfBirth}
                </td>
                {/* Add other table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcceptedApplicantsTable;

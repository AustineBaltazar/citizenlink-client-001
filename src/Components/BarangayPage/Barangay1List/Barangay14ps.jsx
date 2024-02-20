import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Barangay14ps() {
  const [forms, setForms] = useState([]);

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

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-800 w-full">
          <thead>
            <tr className="bg-[#E8D8C4]">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Birthday</th>
              <th className="px-4 py-2">Town</th>
              <th className="px-4 py-2">Barangay</th>
              <th className="px-4 py-2">Applicant Status</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

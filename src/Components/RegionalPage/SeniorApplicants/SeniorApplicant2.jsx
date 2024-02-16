import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SeniorApplicant2 = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/senior/entries"
        );
        const data = response.data;
        const sanIsidroSurForms = data.filter(
          (form) => form.barangay === "San Isidro Sur"
        );
        setForms(sanIsidroSurForms);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold flex justify-center my-4">
        Senior Applicants - San Isidro Sur
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-800 w-full">
          <thead>
            <tr className="bg-[#E8D8C4]">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Sex</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">Barangay</th>
              <th className="px-4 py-2">Application Status</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr key={form._id} className="border-b border-gray-300">
                <td className="px-4 py-2 text-center">{form.firstName}</td>
                <td className="px-4 py-2 text-center">{form.lastName}</td>
                <td className="px-4 py-2 text-center">{form.age}</td>
                <td className="px-4 py-2 text-center">{form.sex}</td>
                <td className="px-4 py-2 text-center">{form.contactNumber}</td>
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
};

export default SeniorApplicant2;

import React, { useState } from "react";

export default function ApplyNow() {
  const [barangay, setBarangay] = useState("");
  const [program, setProgram] = useState("");
  const [dataPrivacy, setDataPrivacy] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dataPrivacy) {
      if (barangay === "San Isidro norte" && program === "4ps Program") {
        window.location.href = "/4psSIN";
      } else if (
        barangay === "San Isidro norte" &&
        program === "Senior Citizen Program"
      ) {
        window.location.href = "/seniorSIN";
      } else if (barangay === "Baybay Lopez" && program === "4ps Program") {
        window.location.href = "/4psBAY";
      } else if (
        barangay === "Baybay Lopez" &&
        program === "Senior Citizen Program"
      ) {
        window.location.href = "/seniorBAY";
      } else {
        alert("Invalid selection.");
      }
    } else {
      alert("Please agree to the data privacy notice.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-xl mt-16">
      <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="barangay"
            className="block text-sm font-semibold mb-2"
          >
            Barangay:
          </label>
          <select
            id="barangay"
            value={barangay}
            onChange={(e) => setBarangay(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Barangay</option>
            <option value="Baybay Lopez">Baybay Lopez</option>
            <option value="San Isidro norte">San Isidro norte</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="program" className="block text-sm font-semibold mb-2">
            Program:
          </label>
          <select
            id="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Program</option>
            <option value="4ps Program">4ps Program</option>
            <option value="Senior Citizen Program">
              Senior Citizen Program
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            <input
              type="checkbox"
              checked={dataPrivacy}
              onChange={(e) => setDataPrivacy(e.target.checked)}
              className="mr-2 leading-tight"
            />
            <span>Data Privacy Notice (I agree)</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next Page
        </button>
      </form>
    </div>
  );
}

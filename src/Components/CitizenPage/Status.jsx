import React, { useState } from "react";
import { useJwt } from "react-jwt";

export default function Status() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const { decodedToken } = useJwt(token);

  if (!decodedToken) {
    return <div>Loading...</div>;
  }

  const applicationStatus = decodedToken.applicationStatus.toUpperCase();

  let celeb;
  let designCeleb;
  if (decodedToken.applicationStatus === "approved") {
    celeb = "CONGRATULATIONS!";
    designCeleb = "bg-[#008000] text-white rounded-lg";
  }

  const pending =
    "Records are submitted, and to be interviewed by the regionals.";
  const forReview =
    "Applicant is interviewed, and to be reviewed by the municipal";
  const inComplete =
    "Some documents are missing. Please complete the needful document/s";
  const inCorrect =
    "Some records didn't match the documents(e.g., birth certificate)";
  const notQualified = "Applicant did not reach the requirement/s. Learn more.";
  const Eligible = "Records are complete, and to be reviewed by the regionals.";
  const notEligible =
    "Applicant is not eligible to register. Learn more(link to how to apply page";
  const qualified = "Your application status is now approved";

  function getDescription(status) {
    switch (status) {
      case "PENDING":
        return pending;
      case "ON REVIEW":
        return forReview;
      case "INCOMPLETE":
        return inComplete;
      case "NOT ELIGIBLE":
        return notEligible;
      case "ELIGIBLE":
        return Eligible;
      case "REJECTED":
        return notQualified;
      case "APPROVED":
        return qualified;
      case "UPDATED":
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices eros nec justo consequat, ut fringilla mauris fermentum.";
      default:
        return "";
    }
  }

  console.log(decodedToken);

  return (
    <div className="grid lg:grid-cols-2 justify-center gap-4 pt-16 min-h-screen bg-gray-200 mb-8">
      <div className="w-full max-w-2xl mx-4 ">
        <div className="bg-[#6D2932] rounded-t-lg">
          <header className="p-4">
            <h1 className="text-xl font-bold text-white">
              Your Current Application Status
            </h1>
          </header>
        </div>
        <div className="bg-white shadow-md rounded-b-lg p-4">
          <div className={designCeleb}>
            <h1 className="text-3xl mb-2 flex justify-center font-bold mb-2">
              {applicationStatus}
            </h1>
          </div>
          <h1 className="text-2xl mb-2 text-green-600 font-bold mb-4 flex justify-center">
            {celeb}
          </h1>
          <p className="mb-4">{getDescription(applicationStatus)}</p>
        </div>
      </div>

      <div className="w-full max-w-xl mx-4">
        <div className="bg-[#6D2932] rounded-t-lg">
          <header className="p-4">
            <h1 className="text-xl font-bold text-white">
              Application Statuses
            </h1>
          </header>
        </div>
        <div className="bg-white shadow-md rounded-b-lg p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border border-gray-300">
                  Application Status
                </th>
                <th className="py-2 px-4 bg-gray-100 border border-gray-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-gray-500 flex justify-center font-bold text-white rounded-md text-lg">
                    PENDING
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  {pending}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-[#9B755E] flex justify-center font-bold text-white rounded-md text-lg">
                    ON REVIEW
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  {forReview}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-5 border border-gray-300">
                  <h1 className="bg-[#F28E2C] flex justify-center font-bold text-white rounded-md text-lg">
                    INCOMPLETE
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  {inComplete}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-[#F28E2C] flex justify-center font-bold text-white rounded-md text-md">
                    NOT ELIGIBLE
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  {notEligible}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-emerald-300 flex justify-center font-bold text-white rounded-md text-lg">
                    ELIGIBLE
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  {Eligible}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-red-500 flex justify-center font-bold text-white rounded-md text-lg">
                    REJECTED
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  {notQualified}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-[#008000] flex justify-center font-bold text-white rounded-md text-lg">
                    APPROVED
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  {qualified}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-[#068CB6] flex justify-center font-bold text-white rounded-md text-lg">
                    UPDATED
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

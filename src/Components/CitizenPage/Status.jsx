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
    celeb = "CONGRATULATION!";
  }
  if (decodedToken.applicationStatus === "approved") {
    designCeleb = "bg-[#008000] text-white rounded-lg   ";
  }

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
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            tenetur accusantium nesciunt sapiente eveniet non molestias aperiam
            corporis adipisci, veniam quaerat vitae voluptates dolor odio saepe
            exercitationem dolores rerum. Quia.
          </p>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-[#9B755E] flex justify-center font-bold text-white rounded-md text-lg">
                    ON REVIEW
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-5 border border-gray-300">
                  <h1 className="bg-[#F28E2C] flex justify-center font-bold text-white rounded-md text-lg">
                    INCOMPLETE
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-[#F28E2C] flex justify-center font-bold text-white rounded-md text-md">
                    NOT ELIGIBLE
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-emerald-300 flex justify-center font-bold text-white rounded-md text-lg">
                    ELIGIBLE
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-red-500 flex justify-center font-bold text-white rounded-md text-lg">
                    REJECTED
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border border-gray-300">
                  <h1 className="bg-[#008000] flex justify-center font-bold text-white rounded-md text-lg">
                    APPROVED
                  </h1>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices eros nec justo consequat, ut fringilla mauris
                  fermentum.
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

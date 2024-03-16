import React from "react";

export default function NoAccess() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className=" font-bold text-red-400 mb-3">
          <h1 className="text-9xl">403 </h1>
          <h1 className="text-2xl text-gray-400">Forbidden</h1>
        </div>
        <p className="text-lg text-gray-600">
          Access to this resource on the server is denied!
        </p>
      </div>
    </div>
  );
}

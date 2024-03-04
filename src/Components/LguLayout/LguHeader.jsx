import React from "react";

export default function LguHeader() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <header className="bg-white text-gray-400 py-4 drop-shadow-xl ">
        <div className="container mx-auto px-4 flex">
          <h1 className="text-xl">LGU Admin</h1>
          <h1 className="ml-4 text-xl">|</h1>
          <button onClick={refreshPage} className="text-xl ml-4">
            Refresh
          </button>
        </div>
      </header>
    </div>
  );
}

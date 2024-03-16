import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "/img/barangay-logo.png";

const Staffs2 = () => {
  const [brgy1Staff, setBrgy1Staff] = useState(0);
  const [brgy2Staff, setBrgy2Staff] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/lgu/users");
        const brgy1users = response.data.filter((user) =>
          user.userId.startsWith("brgy30-")
        );
        const brgy2users = response.data.filter((user) =>
          user.userId.startsWith("brgy05-")
        );

        setBrgy1Staff(brgy1users.length);
        setBrgy2Staff(brgy2users.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="font-bold text-lg border rounded-2xl shadow-xl">
      <h2 className="text-xl font-semibold p-2  rounded-t-2xl text-black ">
        Barangay Staffs
      </h2>
      <div className="p-4 grid grid-cols-2 gap-2 text-center p">
        <div className="border row-span-2 flex justify-center flex-col text-center shadow-lg rounded-lg bg-sky-500 bg-opacity-90 text-white">
          <div className="font-semibold mb-2">
            Brgy San Isidro Norte Citizens
          </div>
          <div className="text-3xl">{brgy1Staff}</div>
        </div>
        <div className="border row-span-2 flex justify-center flex-col text-center shadow-lg rounded-lg bg-sky-500 bg-opacity-90 text-white">
          <div className="font-semibold mb-2">Brgy Baybay Lopez Citizens</div>
          <div className="text-3xl">{brgy2Staff}</div>
        </div>
      </div>
    </div>
  );
};

export default Staffs2;

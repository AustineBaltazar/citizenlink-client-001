import React, { useState, useEffect } from "react";
import axios from "axios";
import Staffs from "./Staffs";

const Dashboard = () => {
  const [totals, setTotals] = useState({
    BaybayLopez: {
      total4PsForms: 0,
      totalSeniorForms: 0,
      total4PsRejected: 0,
      totalSeniorRejected: 0,
      total4PsAccepted: 0,
      totalSeniorAccepted: 0,
      total4PsEligible: 0,
      totalSeniorEligible: 0,
    },
    SanIsidroNorte: {
      total4PsForms: 0,
      totalSeniorForms: 0,
      total4PsRejected: 0,
      totalSeniorRejected: 0,
      total4PsAccepted: 0,
      totalSeniorAccepted: 0,
      total4PsEligible: 0,
      totalSeniorEligible: 0,
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await axios.get(
          "http://localhost:4000/api/4ps/forms"
        );
        const response2 = await axios.get(
          "http://localhost:4000/api/senior/entries"
        );

        const data1 = response1.data;
        const data2 = response2.data;

        const counts4PsBaybayLopez = countFormsByBarangay(
          data1,
          "Baybay Lopez"
        );
        const countsSeniorBaybayLopez = countFormsByBarangay(
          data2,
          "Baybay Lopez"
        );

        const counts4PsSanIsidroNorte = countFormsByBarangay(
          data1,
          "San Isidro Norte"
        );
        const countsSeniorSanIsidroNorte = countFormsByBarangay(
          data2,
          "San Isidro Norte"
        );

        setTotals({
          BaybayLopez: {
            total4PsForms: counts4PsBaybayLopez.totalForms,
            totalSeniorForms: countsSeniorBaybayLopez.totalForms,
            total4PsRejected: counts4PsBaybayLopez.rejected,
            totalSeniorRejected: countsSeniorBaybayLopez.rejected,
            total4PsAccepted: counts4PsBaybayLopez.accepted,
            totalSeniorAccepted: countsSeniorBaybayLopez.accepted,
            total4PsEligible: counts4PsBaybayLopez.eligible,
            totalSeniorEligible: countsSeniorBaybayLopez.eligible,
          },
          SanIsidroNorte: {
            total4PsForms: counts4PsSanIsidroNorte.totalForms,
            totalSeniorForms: countsSeniorSanIsidroNorte.totalForms,
            total4PsRejected: counts4PsSanIsidroNorte.rejected,
            totalSeniorRejected: countsSeniorSanIsidroNorte.rejected,
            total4PsAccepted: counts4PsSanIsidroNorte.accepted,
            totalSeniorAccepted: countsSeniorSanIsidroNorte.accepted,
            total4PsEligible: counts4PsSanIsidroNorte.eligible,
            totalSeniorEligible: countsSeniorSanIsidroNorte.eligible,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const countFormsByBarangay = (forms, barangay) => {
    const counts = {
      totalForms: 0,
      rejected: 0,
      accepted: 0,
      eligible: 0,
    };
    forms.forEach((form) => {
      if (form.barangay === barangay) {
        counts.totalForms++;
        switch (form.applicationStatus) {
          case "rejected":
            counts.rejected++;
            break;
          case "approved":
            counts.accepted++;
            break;
          case "eligible":
            counts.eligible++;
            break;
          default:
            break;
        }
      }
    });
    return counts;
  };

  const totalUserBaybay =
    totals.BaybayLopez.total4PsForms + totals.BaybayLopez.totalSeniorForms;

  const totalUserSanIsidroNorte =
    totals.SanIsidroNorte.total4PsForms +
    totals.SanIsidroNorte.totalSeniorForms;

  return (
    <div className="pl-16 pr-16 pt-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-rows-2 gap-4 ">
        <div className="font-bold text-lg border rounded-2xl shadow-xl">
          <h2 className="text-lg font-semibold p-2  rounded-t-2xl text-black ">
            Baybay Lopez
          </h2>
          <div className="p-4 grid grid-cols-4 gap-2 text-center">
            <div className="border row-span-2 flex justify-center flex-col text-center shadow-lg rounded-lg bg-blue-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Total Users:</div>
              <div className="text-3xl">{totalUserBaybay}</div>
            </div>
            <div className="border shadow-lg rounded-lg bg-gray-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">4Ps Eligible:</div>
              <div className="text-3xl">
                {totals.BaybayLopez.total4PsEligible}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-green-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">4Ps Accepted:</div>
              <div className="text-3xl">
                {totals.BaybayLopez.total4PsAccepted}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-red-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">4Ps Rejected:</div>
              <div className="text-3xl">
                {totals.BaybayLopez.total4PsRejected}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-gray-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Senior Eligible:</div>
              <div className="text-3xl">
                {totals.BaybayLopez.totalSeniorEligible}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-green-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Senior Accepted:</div>
              <div className="text-3xl">
                {totals.BaybayLopez.totalSeniorAccepted}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-red-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Senior Rejected:</div>
              <div className="text-3xl">
                {totals.BaybayLopez.totalSeniorRejected}
              </div>
            </div>
          </div>
        </div>

        <div className="font-bold text-lg border rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold p-2  rounded-t-2xl text-black ">
            San Isidro Norte
          </h2>
          <div className="p-4 grid grid-cols-4 gap-2 text-center p">
            <div className="border row-span-2 flex justify-center flex-col text-center shadow-lg rounded-lg bg-blue-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Total Users:</div>
              <div className="text-3xl">{totalUserSanIsidroNorte}</div>
            </div>
            <div className="border shadow-lg rounded-lg bg-gray-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">4Ps Eligible:</div>
              <div className="text-3xl">
                {totals.SanIsidroNorte.total4PsEligible}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-green-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">4Ps Accepted:</div>
              <div className="text-3xl">
                {totals.SanIsidroNorte.total4PsAccepted}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-red-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">4Ps Rejected:</div>
              <div className="text-3xl">
                {totals.SanIsidroNorte.total4PsRejected}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-gray-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Senior Eligible:</div>
              <div className="text-3xl">
                {totals.SanIsidroNorte.totalSeniorEligible}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-green-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Senior Accepted:</div>
              <div className="text-3xl">
                {totals.SanIsidroNorte.totalSeniorAccepted}
              </div>
            </div>
            <div className="border shadow-lg rounded-lg bg-red-500 bg-opacity-75 text-white">
              <div className="font-semibold mb-2">Senior Rejected:</div>
              <div className="text-3xl">
                {totals.SanIsidroNorte.totalSeniorRejected}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Staffs />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

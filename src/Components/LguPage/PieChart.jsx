// GraphComponent.js

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Chart } from "chart.js/auto";
import "chartjs-plugin-datalabels";

const GraphComponent = () => {
  const [approved4PsSIN, setApproved4PsSIN] = useState(0);
  const [approved4PsBBL, setApproved4PsBBL] = useState(0);
  const [approvedSeniorSIN, setApprovedSeniorSIN] = useState(0);
  const [approvedSeniorBBL, setApprovedSeniorBBL] = useState(0);

  const chartRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/4ps/users");
        console.log(response.data);

        const approved4PsSINCount = response.data.filter(
          (user) =>
            user.userId.startsWith("4ps") &&
            user.records &&
            user.records.applicationStatus === "approved" &&
            user.records.barangay === "San Isidro Norte"
        ).length;

        const approved4PsBBLCount = response.data.filter(
          (user) =>
            user.userId.startsWith("4ps") &&
            user.records &&
            user.records.applicationStatus === "approved" &&
            user.records.barangay === "Baybay Lopez"
        ).length;

        const approvedSeniorSINCount = response.data.filter(
          (user) =>
            user.userId.startsWith("sen") &&
            user.records &&
            user.records.applicationStatus === "approved" &&
            user.records.barangay === "San Isidro Norte"
        ).length;

        const approvedSeniorBBLCount = response.data.filter(
          (user) =>
            user.userId.startsWith("sen") &&
            user.records &&
            user.records.applicationStatus === "approved" &&
            user.records.barangay === "Baybay Lopez"
        ).length;

        setApproved4PsSIN(approved4PsSINCount);
        setApproved4PsBBL(approved4PsBBLCount);
        setApprovedSeniorSIN(approvedSeniorSINCount);
        setApprovedSeniorBBL(approvedSeniorBBLCount);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRefs.current.length > 0) {
      chartRefs.current.forEach((chart) => chart.destroy());
    }
    chartRefs.current = [];

    const total4Ps = approved4PsSIN + approved4PsBBL;
    const totalSenior = approvedSeniorSIN + approvedSeniorBBL;

    const percentage4PsSIN =
      total4Ps !== 0 ? ((approved4PsSIN / total4Ps) * 100).toFixed(2) : 0;
    const percentage4PsBBL =
      total4Ps !== 0 ? ((approved4PsBBL / total4Ps) * 100).toFixed(2) : 0;
    const percentageSeniorSIN =
      totalSenior !== 0
        ? ((approvedSeniorSIN / totalSenior) * 100).toFixed(2)
        : 0;
    const percentageSeniorBBL =
      totalSenior !== 0
        ? ((approvedSeniorBBL / totalSenior) * 100).toFixed(2)
        : 0;

    const data4Ps = {
      labels: [`SIN (${percentage4PsSIN}%)`, `BBL (${percentage4PsBBL}%)`],
      datasets: [
        {
          data: [approved4PsSIN, approved4PsBBL],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    };

    const dataSenior = {
      labels: [
        `SIN (${percentageSeniorSIN}%)`,
        `BBL (${percentageSeniorBBL}%)`,
      ],
      datasets: [
        {
          data: [approvedSeniorSIN, approvedSeniorBBL],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    };

    const config4Ps = {
      type: "pie",
      data: data4Ps,
      options: {
        plugins: {
          datalabels: {
            color: "#fff",
            formatter: (value, context) => {
              return value; // Display the count value
            },
          },
        },
      },
    };

    const configSenior = {
      type: "pie",
      data: dataSenior,
      options: {
        plugins: {
          datalabels: {
            color: "#fff",
            formatter: (value, context) => {
              return value; // Display the count value
            },
          },
        },
      },
    };

    const ctx4Ps = document.getElementById("chart-4ps").getContext("2d");
    const ctxSenior = document.getElementById("chart-senior").getContext("2d");

    const chart4Ps = new Chart(ctx4Ps, config4Ps);
    const chartSenior = new Chart(ctxSenior, configSenior);

    chartRefs.current.push(chart4Ps, chartSenior);

    return () => {
      chartRefs.current.forEach((chart) => chart.destroy());
      chartRefs.current = [];
    };
  }, [approved4PsSIN, approved4PsBBL, approvedSeniorSIN, approvedSeniorBBL]);

  return (
    <div className="flex justify-center items-center flex-col md:flex-row  space-x-20 ">
      <div className="w-full md:w-[40%] shadow-xl">
        <div className="bg-white border rounded p-4">
          <h2 className="text-lg font-semibold mb-4">
            Approved 4Ps Applicants
          </h2>
          <canvas id="chart-4ps"></canvas>
        </div>
      </div>
      <div className="w-full md:w-[40%] shadow-xl">
        <div className="bg-white  rounded p-4">
          <h2 className="text-lg font-semibold mb-4">
            Approved Senior Applicants
          </h2>
          <canvas id="chart-senior"></canvas>
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;

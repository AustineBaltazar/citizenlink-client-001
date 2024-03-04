import React, { useState } from "react";
import { useJwt } from "react-jwt"; // Import useJwt hook
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Benefits from "./Components/UserPage/Benefits";
import Download from "./Components/UserPage/Download";
import Home from "./Components/UserPage/Home";
import Login from "./Components/UserPage/Login";
import News from "./Components/UserPage/News";
import UserLayout from "./Components/UserLayout/UserLayout";
import Benefit1 from "./Components/Benefits/Benefits1";
import About from "./Components/UserPage/About";
import AboutSystem from "./Components/Abouts/AboutSystem";
import AboutTown from "./Components/Abouts/AboutTown";
import BarangayLayout from "./Components/BarangayLayout/BarangayLayout";
import SeniorForm from "./Components/BarangayPage/SeniorForm";
import FourPsForm from "./Components/BarangayPage/FourPsForm";
import RegionalLayout from "./Components/RegionalLayout/RegionalLayout";
import Barangay1 from "./Components/RegionalPage/Barangay1";
import Barangay2 from "./Components/RegionalPage/Barangay2";
import Dashboard from "./Components/RegionalPage/Dashboard";
import FourPsApplicant1 from "./Components/RegionalPage/FourPsApplicants/FourPsApplicant1";
import SeniorApplicants1 from "./Components/RegionalPage/SeniorApplicants/SeniorApplicants1";
import FourPsApplicant2 from "./Components/RegionalPage/FourPsApplicants/FourPsApplicant2";
import SeniorApplicant2 from "./Components/RegionalPage/SeniorApplicants/SeniorApplicant2";
import BarangayTable from "./Components/BarangayPage/BarangayTable";
import Barangay14ps from "./Components/BarangayPage/Barangay1List/Barangay14ps";
import Barangay1Senior from "./Components/BarangayPage/Barangay1List/Barangay1Senior";
import LguLayout from "./Components/LguLayout/LguLayout";
import LguBarangay1 from "./Components/LguPage/Barangays/LguBarangay1";
import LguBarangay2 from "./Components/LguPage/Barangays/LguBarangay2";
import Lgu4ps1 from "./Components/LguPage/LguBarangay1.jsx/Lgu4ps1";
import Lgu4ps2 from "./Components/LguPage/LguBarangay2.jsx/Lgu4ps2";
import LguSenior1 from "./Components/LguPage/LguBarangay1.jsx/LguSenior1";
import LguSenior2 from "./Components/LguPage/LguBarangay2.jsx/LguSenior2";
import CitizenLayout from "./Components/CitizenLayout/CitizenLayout";
import Status from "./Components/CitizenPage/Status";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Use useJwt hook to access decoded JWT token
  const { decodedToken } = useJwt(token);

  // Log the decoded token payload
  console.log(decodedToken);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />

        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="benefits" element={<Benefits />}>
            <Route path="benefit1" element={<Benefit1 />} />
            <Route path="news" element={<News />} />
          </Route>
          <Route path="download" element={<Download />} />
          <Route path="/about" element={<About />}>
            <Route path="aboutsystem" element={<AboutSystem />} />
            <Route path="abouttown" element={<AboutTown />} />
          </Route>
        </Route>

        <Route path="/barangay" element={<BarangayLayout />}>
          <Route path="/barangay" element={<SeniorForm />} />
          <Route path="4ps" element={<FourPsForm />} />
          <Route path="applicants" element={<BarangayTable />}>
            <Route path="Barangay14ps" element={<Barangay14ps />} />
            <Route path="Barangay1Senior" element={<Barangay1Senior />} />
          </Route>
        </Route>

        <Route path="/regional" element={<RegionalLayout />}>
          <Route path="/regional" element={<Dashboard />} />
          <Route path="Barangay1" element={<Barangay1 />}>
            <Route path="FourPsApplicant1" element={<FourPsApplicant1 />} />
            <Route path="SeniorApplicant1" element={<SeniorApplicants1 />} />
          </Route>
          <Route path="Barangay2" element={<Barangay2 />}>
            <Route path="FourPsApplicant2" element={<FourPsApplicant2 />} />
            <Route path="SeniorApplicant2" element={<SeniorApplicant2 />} />
          </Route>
        </Route>

        <Route path="/Lgu" element={<LguLayout />}>
          <Route path="Barangay1" element={<LguBarangay1 />}>
            <Route path="FourPsApplicant1" element={<Lgu4ps1 />} />
            <Route path="SeniorApplicant1" element={<LguSenior1 />} />
          </Route>
          <Route path="Barangay2" element={<LguBarangay2 />}>
            <Route path="FourPsApplicant2" element={<Lgu4ps2 />} />
            <Route path="SeniorApplicant2" element={<LguSenior2 />} />
          </Route>
        </Route>

        <Route path="/Citizen" element={<CitizenLayout />}>
          <Route
            path="Status"
            element={<Status decodedToken={decodedToken} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

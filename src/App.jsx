import React from "react";
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
import Barangay3 from "./Components/RegionalPage/Barangay3";
import Dashboard from "./Components/RegionalPage/Dashboard";
import FourPsApplicant1 from "./Components/RegionalPage/FourPsApplicants/FourPsApplicant1";
import SeniorApplicants1 from "./Components/RegionalPage/SeniorApplicants/SeniorApplicants1";
import FourPsApplicant2 from "./Components/RegionalPage/FourPsApplicants/FourPsApplicant2";
import SeniorApplicant2 from "./Components/RegionalPage/SeniorApplicants/SeniorApplicant2";
import BarangayTable from "./Components/BarangayPage/BarangayTable";
import Barangay14ps from "./Components/BarangayPage/Barangay1List/Barangay14ps";
import Barangay1Senior from "./Components/BarangayPage/Barangay1List/Barangay1Senior";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

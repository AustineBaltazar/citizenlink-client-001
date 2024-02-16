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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

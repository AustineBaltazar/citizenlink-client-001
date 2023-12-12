import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Benefits from "./Components/Benefits";
import Download from "./Components/Download";
import Home from "./Components/Home";
import Login from "./Components/Login";
import News from "./Components/News";
import Card from "./Components/Card";
import Registration from "./Components/Registration";
import UserLayout from "./Components/UserLayout/UserLayout";
import Register1 from "./Components/Registrations/Register1";
import Register2 from "./Components/Registrations/Register2";
import Benefit1 from "./Components/Benefits/Benefits1";
import Admin from "./Components/Admin1";

import Register4ps from "./Components/Register4ps";
import About from "./Components/About";
import AboutSystem from "./Components/Abouts/AboutSystem";
import AboutTown from "./Components/Abouts/AboutTown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="benefits" element={<Benefits />}>
            <Route path="benefit1" element={<Benefit1 />} />

            <Route path="news" element={<News />} />
          </Route>
          <Route path="download" element={<Download />} />
          <Route path="registration" element={<Registration />}>
            <Route path="register1" element={<Register1 />} />
            <Route path="register2" element={<Register2 />} />
          </Route>
          <Route path="card" element={<Card />} />
          <Route path="registersenior" element={<Register4ps />} />
          <Route path="/about" element={<About />}>
            <Route path="aboutsystem" element={<AboutSystem />} />
            <Route path="abouttown" element={<AboutTown />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

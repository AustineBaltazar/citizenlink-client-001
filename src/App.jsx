import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoAccess from "./Components/NoAccess";
import UserLayout from "./Components/UserLayout/UserLayout";

const Home = lazy(() => import("./Components/UserPage/Home"));
const Login = lazy(() => import("./Components/UserPage/Login"));
const News = lazy(() => import("./Components/UserPage/News"));
const Benefits = lazy(() => import("./Components/UserPage/Benefits"));
const Download = lazy(() => import("./Components/UserPage/Download"));
const Benefit1 = lazy(() => import("./Components/Benefits/Benefits1"));
const About = lazy(() => import("./Components/UserPage/About"));
const AboutSystem = lazy(() => import("./Components/Abouts/AboutSystem"));
const AboutTown = lazy(() => import("./Components/Abouts/AboutTown"));
const CitizenLayout = lazy(() =>
  import("./Components/CitizenLayout/CitizenLayout")
);
const Status = lazy(() => import("./Components/CitizenPage/Status"));
const BarangayLayout = lazy(() =>
  import("./Components/BarangayLayout/BarangayLayout")
);
const SeniorForm = lazy(() => import("./Components/BarangayPage/SeniorForm"));
const FourPsForm = lazy(() => import("./Components/BarangayPage/FourPsForm"));
const BarangayTable = lazy(() =>
  import("./Components/BarangayPage/BarangayTable")
);
const Barangay14ps = lazy(() =>
  import("./Components/BarangayPage/Barangay1List/Barangay14ps")
);
const Barangay1Senior = lazy(() =>
  import("./Components/BarangayPage/Barangay1List/Barangay1Senior")
);
const BarangayLayout2 = lazy(() =>
  import("./Components/BarangayLayout2/BarangayLayout2")
);
const SeniorForm2 = lazy(() =>
  import("./Components/BarangayPage2/SeniorForm2")
);
const FourPsForm2 = lazy(() =>
  import("./Components/BarangayPage2/FourPsForm2")
);
const BarangayTable2 = lazy(() =>
  import("./Components/BarangayPage2/BarangayTable2")
);
const Barangay24ps = lazy(() =>
  import("./Components/BarangayPage2/Barangay2List/Barangay24ps")
);
const Barangay2Senior = lazy(() =>
  import("./Components/BarangayPage2/Barangay2List/Barangay2Senior")
);
const RegionalLayout = lazy(() =>
  import("./Components/RegionalLayout/RegionalLayout")
);
const Dashboard = lazy(() => import("./Components/RegionalPage/Dashboard"));
const CreateMunicipal = lazy(() =>
  import("./Components/RegionalPage/CreateMunicipal")
);
const Barangay1profile = lazy(() =>
  import("./Components/RegionalPage/Profiles/Barangay1profile")
);
const Barangay2profile = lazy(() =>
  import("./Components/RegionalPage/Profiles/Barangay2profile")
);
const Citizen1Profile = lazy(() =>
  import("./Components/RegionalPage/Profiles/Citizen1Profile")
);
const Citizen2Profile = lazy(() =>
  import("./Components/RegionalPage/Profiles/Citizen2Profile")
);
const MunProfile = lazy(() =>
  import("./Components/RegionalPage/Profiles/MunProfile")
);
const LguLayout = lazy(() => import("./Components/LguLayout/LguLayout"));
const AddStaff = lazy(() => import("./Components/LguPage/Barangays/AddStaff"));
const LguBarangay1 = lazy(() =>
  import("./Components/LguPage/Barangays/LguBarangay1")
);
const LguBarangay2 = lazy(() =>
  import("./Components/LguPage/Barangays/LguBarangay2")
);
const Lgu4ps1 = lazy(() =>
  import("./Components/LguPage/LguBarangay1.jsx/Lgu4ps1")
);
const Lgu4ps2 = lazy(() =>
  import("./Components/LguPage/LguBarangay2.jsx/Lgu4ps2")
);
const LguSenior1 = lazy(() =>
  import("./Components/LguPage/LguBarangay1.jsx/LguSenior1")
);
const LguSenior2 = lazy(() =>
  import("./Components/LguPage/LguBarangay2.jsx/LguSenior2")
);

const Barangay1 = lazy(() => import("./Components/RegionalPage/Barangay1"));

const FourPsApplicant1 = lazy(() =>
  import("./Components/RegionalPage/FourPsApplicants/FourPsApplicant1")
);

const FourPsApplicant2 = lazy(() =>
  import("./Components/RegionalPage/FourPsApplicants/FourPsApplicant2")
);
const SeniorApplicants1 = lazy(() =>
  import("./Components/RegionalPage/SeniorApplicants/SeniorApplicants1")
);
const SeniorApplicant2 = lazy(() =>
  import("./Components/RegionalPage/SeniorApplicants/SeniorApplicant2")
);
const Barangay2 = lazy(() => import("./Components/RegionalPage/Barangay2"));

const LguDashboard = lazy(() => import("./Components/LguPage/Dashboard2"));

const Dashboard3 = lazy(() => import("./Components/BarangayPage/Dashboard3"));
const Dashboard4 = lazy(() => import("./Components/BarangayPage2/Dashboard4"));

import ProtectedRoute from "./Components/ProtectedRoute";
import Loading from "./Components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/noAccess" element={<NoAccess />} />

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

          <Route path="/Citizen" element={<ProtectedRoute role="citizen" />}>
            <Route path="/Citizen" element={<CitizenLayout />}>
              <Route path="status" element={<Status />} />
            </Route>
          </Route>

          <Route path="/barangay" element={<ProtectedRoute role="barangay" />}>
            <Route path="/barangay" element={<BarangayLayout />}>
              <Route path="senior" element={<SeniorForm />} />
              <Route path="dashboard" element={<Dashboard3 />} />
              <Route path="4ps" element={<FourPsForm />} />
              <Route path="applicants" element={<BarangayTable />}>
                <Route path="Barangay14ps" element={<Barangay14ps />} />
                <Route path="Barangay1Senior" element={<Barangay1Senior />} />
              </Route>
            </Route>
          </Route>

          <Route path="/barangay2" element={<ProtectedRoute role="barangay" />}>
            <Route path="/barangay2" element={<BarangayLayout2 />}>
              <Route path="senior" element={<SeniorForm2 />} />
              <Route path="dashboard" element={<Dashboard4 />} />
              <Route path="4ps" element={<FourPsForm2 />} />
              <Route path="applicants" element={<BarangayTable2 />}>
                <Route path="Barangay24ps" element={<Barangay24ps />} />
                <Route path="Barangay2Senior" element={<Barangay2Senior />} />
              </Route>
            </Route>
          </Route>

          <Route path="/regional" element={<ProtectedRoute role="regional" />}>
            <Route path="/regional" element={<RegionalLayout />}>
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="add" element={<CreateMunicipal />}>
                <Route path="barangay1" element={<Barangay1profile />} />
                <Route path="barangay2" element={<Barangay2profile />} />
                <Route path="citizen1" element={<Citizen1Profile />} />
                <Route path="citizen2" element={<Citizen2Profile />} />
                <Route path="muni" element={<MunProfile />} />
              </Route>
              co
              <Route path="Barangay1" element={<Barangay1 />}>
                <Route path="FourPsApplicant1" element={<FourPsApplicant1 />} />
                <Route
                  path="SeniorApplicant1"
                  element={<SeniorApplicants1 />}
                />
              </Route>
              <Route path="Barangay2" element={<Barangay2 />}>
                <Route path="FourPsApplicant2" element={<FourPsApplicant2 />} />
                <Route path="SeniorApplicant2" element={<SeniorApplicant2 />} />
              </Route>
            </Route>
          </Route>

          <Route path="/Lgu" element={<ProtectedRoute role="municipal" />}>
            <Route path="/Lgu" element={<LguLayout />}>
              <Route path="*" element={<AddStaff />} />
              <Route path="Dashboard" element={<LguDashboard />} />

              <Route path="Barangay1" element={<LguBarangay1 />}>
                <Route path="FourPsApplicant1" element={<Lgu4ps1 />} />
                <Route path="SeniorApplicant1" element={<LguSenior1 />} />
              </Route>
              <Route path="Barangay2" element={<LguBarangay2 />}>
                <Route path="FourPsApplicant2" element={<Lgu4ps2 />} />
                <Route path="SeniorApplicant2" element={<LguSenior2 />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

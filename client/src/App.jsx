import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarDemo } from "./components/Navbar";
import { GridBackgroundDemo } from "./components/Grid-Background";
import Login from "./components/Login-Page";
import Register from "./components/Register";
import { backendJobs } from "./Backend";
import { frontendJobs } from "./Frontend";
import JobList from "./components/JobList";
import JobDisplayPage from "./components/JobDisplay-Page";
import JobSearch from "./JobSearch";
import JobPost from "./JobPost";

function App() {
  return (
    <Router>
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<GridBackgroundDemo />} />
        <Route
          path="/jobseeker-login"
          element={<Login name="Job Seeker's" />}
        />
        <Route path="/recruiter-login" element={<Login name="Recruiter's" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/backend-jobs" element={<JobList jobArray={backendJobs} />} />
        <Route path="/frontend-jobs" element={<JobList jobArray={frontendJobs} />} />
        <Route path="/frontend-jobs/:id" element={<JobDisplayPage />} />
        <Route path="/backend-jobs/:id" element={<JobDisplayPage />} />
        <Route path="/job-search" element={<JobSearch />} />
        <Route path="/job-post" element={<JobPost />} />
      </Routes>
    </Router>
  );
}

export default App;

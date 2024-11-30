import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarDemo } from "./components/Navbar";
import { GridBackgroundDemo } from "./components/Grid-Background";
import Login from "./app/user/components/Login-Page";
import Register from "./app/user/components/Register";
import JobList from "./app/job/components/JobList";
import JobDisplayPage from "./app/job/components/JobDisplay-Page";
import JobSearch from "./JobSearch";
import JobPost from "./JobPost";
import { JobApplication } from "./app/applicant/components/Job-Application";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#181818",
            color: "#fff",
            width: "300px",
            textAlign: "center",
            fontSize: "14px",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<GridBackgroundDemo />} />
        <Route
          path="/jobseeker-login"
          element={<Login name="Job Seeker's" />}
        />
        <Route path="/recruiter-login" element={<Login name="Recruiter's" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/backend-jobs" element={<JobList />} />
        <Route path="/frontend-jobs" element={<JobList />} />
        <Route path="/frontend-jobs/:id" element={<JobDisplayPage />} />
        <Route path="/backend-jobs/:id" element={<JobDisplayPage />} />
        <Route path="/job-search" element={<JobSearch />} />
        <Route path="/job-post" element={<JobPost />} />
        <Route path="/job-application" element={<JobApplication />} />
      </Routes>
    </Router>
  );
}

export default App;

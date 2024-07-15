import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobDisplayPage = () => {
  const location = useLocation();
  const user = window.localStorage.getItem("User");
  const navigate = useNavigate();
  const job = location.state?.job;
  console.log(job);

  const handleClick = () => {
    if (user) {
      navigate("/apply-jobs");
    } else {
      navigate("/jobseeker-login");
    }
  };

  if (!job) {
    return <div>Job not found</div>;
  }
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-5xl w-full mt-[100px]">
        <div className="flex items-center mb-4">
          <img
            src={job.companyLogo}
            alt={`${job.company} logo`}
            className="h-12 w-12 object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{job.position}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">About {job.company}</h2>
          <p className="text-gray-600">{job.company_description}</p>
        </div>
        <h3 className="text-xl font-bold mb-4 mt-10">Job Requirements</h3>
        <ul className="list-disc pl-5 space-y-2">
          {job.job_description.map(
            (
              desc:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined,
              i: React.Key | null | undefined
            ) => (
              <li key={i} className="text-gray-700">
                {desc}
              </li>
            )
          )}
        </ul>
        <div>
          <button
            onClick={handleClick}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDisplayPage;

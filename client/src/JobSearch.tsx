import React, { useEffect, useState } from "react";
import { JobsInterface } from "./models/types";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const JobSearch = () => {
  const [input, setInput] = useState({
    job: "",
    location: "",
  });

  const [matchedJobs, setMatchedJobs] = useState<JobsInterface[]>([]);

  useEffect(() => {
    getJobs();
  }, []);

  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userId");

  async function getJobs() {
    try {
      const response = await axios.get("/api/get-jobs", {
        params: {
          job: input.job,
          location: input.location,
        },
      });
      const jobs = response.data.jobs;
      console.log(jobs);
      setMatchedJobs(jobs);
      setInput({
        job: "",
        location: "",
      });
    } catch (error) {
      console.error("Failed to fetch the jobs wih error: ", error);
    }
  }

  function handleChange(e: { target: { id: string | number; value: any } }) {
    const newData = { ...input };
    newData[e.target.id] = e.target.value;
    setInput(newData);
  }

  function handleSearch(e: any) {
    if (e.key === "Enter" || e.type === "click") {
      getJobs();
    }
  }

  // Handle job click
  const handleJobClick = (job: JobsInterface) => {
    navigate(`/${job.category}-jobs/${job.job_id}`, { state: { job } });
  };

  const handleJobApply = (job_id: string) => {
    if (userId) {
      navigate("/job-application", { state: { job_id } });
    }
    navigate("/jobseeker-login");
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="flex flex-col items-center mx-auto">
        {/* Search Bar */}
        <div className="mt-[145px] py-4">
          <div className="flex flex-col md:flex-row items-center justify-center mb-6">
            <input
              type="text"
              id="job"
              name="job"
              value={input.job}
              onChange={handleChange}
              placeholder="Job title, keywords, or company"
              className="w-full md:w-1/2 p-2 mb-2 md:mb-0 md:mr-2 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <input
              type="text"
              id="location"
              name="location"
              value={input.location}
              onChange={handleChange}
              onKeyDown={handleSearch}
              placeholder="City, state, or zip code"
              className="w-full md:w-1/2 p-2 mb-2 md:mb-0 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <button
              onClick={handleSearch}
              className="w-full md:w-32 h-10 mt-2 ms-2 md:mt-0 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Find Jobs
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center space-x-2 mb-4">
            <button className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded hover:bg-gray-700">
              Date Posted
            </button>
            <button className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded hover:bg-gray-700">
              Remote
            </button>
            <button className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded hover:bg-gray-700">
              Salary Estimate
            </button>
            <button className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded hover:bg-gray-700">
              Job Type
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="flex flex-col items-center w-3/4 space-y-4 mb-16">
          {matchedJobs.map((job, index) => (
            <div
              key={index}
              className="p-4 border border-gray-800 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer"
            >
              <h3
                onClick={() => handleJobClick(job)}
                className="text-xl font-bold text-white hover:underline"
              >
                {job.position}
              </h3>
              <p className="text-gray-400">{job.location}</p>
              <p className="mt-2 text-white">{job.job_description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Posted {job?.updatedAt}
                </span>
                <button
                  onClick={() => handleJobApply(job._id)}
                  className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;

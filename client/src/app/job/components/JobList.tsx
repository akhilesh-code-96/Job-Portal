import React from "react";
import Pagination from "../../../components/Pagination";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { JobsInterface } from "../../../models/types";
import { useFetchJobs } from "../custom";

const JobList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 10;
  const location = useLocation();
  console.log("location", location);
  const { jobs, loading, error } = useFetchJobs(location.pathname);
  const [jobArray, setJobArray] = useState<JobsInterface[]>([]);

  useEffect(() => {
    setJobArray(jobs);
  }, [location, jobs]);

  // Mock pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs: JobsInterface[] = jobArray.slice(
    indexOfFirstJob,
    indexOfLastJob
  );

  // useNavigate hook
  const navigate = useNavigate();
  console.log("Job array", jobArray);

  // Handle job click
  const handleJobClick = (job: JobsInterface) => {
    navigate(`${location.pathname}/${job.job_id}`, { state: { job } });
  };

  // Mock paginate function
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="mt-[100px] max-w-4xl w-full p-6">
        {currentJobs.map((job) => (
          <div
            key={job.job_id}
            className="mb-6 p-6 bg-gray-800 text-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleJobClick(job)}
          >
            <div className="text-xl font-bold">{job.company}</div>
            <div className="text-sm text-gray-400">{job.position}</div>
          </div>
        ))}
        <div className="flex justify-center mt-6 mb-10">
          <Pagination
            totalJobs={jobArray.length}
            jobsPerPage={jobsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default JobList;

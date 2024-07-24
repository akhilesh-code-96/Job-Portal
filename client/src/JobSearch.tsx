import React from "react";

const JobSearch = () => {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="container mx-auto">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-6">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full md:w-1/2 p-2 mb-2 md:mb-0 md:mr-2 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <input
              type="text"
              placeholder="City, state, or zip code"
              className="w-full md:w-1/2 p-2 mb-2 md:mb-0 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <button className="w-full md:w-32 h-10 mt-2 ms-2 md:mt-0 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
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

          {/* Job Listings */}
          {/* <div className="space-y-4">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="p-4 border border-gray-800 bg-gray-800 rounded hover:bg-gray-700"
              >
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p className="text-gray-400">Company Name - Location</p>
                <p className="mt-2">Short description of the job...</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    Posted 2 days ago
                  </span>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
        </div> */}
        </div>
    </div>
  );
};

export default JobSearch;

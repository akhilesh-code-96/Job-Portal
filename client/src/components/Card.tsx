import React from "react";
import { cn } from "../utils/cn";
import { JobAppInterface } from "../models/types";

export function Card({
  job_id,
  position,
  firstname,
  lastname,
  email,
  resume,
}: JobAppInterface) {
  return (
    <div className="max-w-xs w-full mx-auto">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-auto rounded-md shadow-lg mx-auto flex flex-col justify-start p-6 border border-transparent dark:border-neutral-800",
          "bg-white dark:bg-gray-800 transition-all ease-in-out duration-300 transform hover:scale-105"
        )}
      >
        {/* Card Header */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300">
            <img
              src={`https://ui-avatars.com/api/?name=${firstname}+${lastname}`} // Placeholder avatar
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="font-semibold text-xl text-gray-900 dark:text-white">
              {position}
            </h1>
            <p className="font-medium text-lg text-gray-700 dark:text-gray-300">
              {firstname} {lastname}
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="mb-4">
          <p className="font-normal text-base text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white">
              Email:
            </span>{" "}
            {email}
          </p>
        </div>

        {/* Resume Button */}
        <div className="mt-auto flex justify-end">
          <a
            href={`${resume}?attachment`}
            download
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

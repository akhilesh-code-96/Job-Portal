import React from "react";
import { ApplicantForm } from "../../../components/Applicant-Form";

export const JobApplication = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="mt-32 mb-4 z-10">
        <ApplicantForm />
      </div>
    </div>
  );
};

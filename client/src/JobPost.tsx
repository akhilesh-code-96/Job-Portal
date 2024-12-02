"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "./utils/cn";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const JobPostForm = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    companyName: "",
    position: "",
    companyDescription: "",
    jobDescription: "",
    category: "frontend",
    location: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (image) {
        formData.append("companyLogo", image); // Append the image file
      } // Append the image file
      Object.keys(job).forEach((key) => {
        formData.append(key, job[key]);
      });

      axios.post(`${BASE_URL}/api/post-job`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to post the job with error: ", error);
    }
  };

  const handleChange = (e: any) => {
    const newData = { ...job };
    newData[e.target.id] = e.target.value;
    setJob(newData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      {/* Form Div */}
      <div className="mt-32 mb-5 max-w-3/4 w-full md:w-1/2 md:h-3/4 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Post a Job
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Fill out the form below to post a job listing.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              placeholder="Company Name"
              type="text"
              value={job.companyName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="companyLogo">Company Logo URL</Label>
            <Input
              id="companyLogo"
              type="file"
              onChange={handleFileChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              placeholder="Position"
              type="text"
              value={job.position}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="location">Job Location</Label>
            <Input
              id="location"
              placeholder="city, state"
              type="text"
              value={job.location}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={job.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded"
              required
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="companyDescription">Company Description</Label>
            <textarea
              id="companyDescription"
              placeholder="Company Description"
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded h-24"
              value={job.companyDescription}
              onChange={handleChange}
              required
            ></textarea>
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="jobDescription">Job Description</Label>
            <textarea
              id="jobDescription"
              placeholder="Job Description"
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded h-32"
              value={job.jobDescription}
              onChange={handleChange}
              required
            ></textarea>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Post Job &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default JobPostForm;

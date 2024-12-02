import { useState, useEffect } from "react";
import { JobsInterface } from "../../../../models/types";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useFetchJobs = (path: string) => {
  const [jobs, setJobs] = useState<JobsInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      let category = "";
      if (path === "/frontend-jobs") {
        category = "frontend";
      } else if (path === "/backend-jobs") {
        category = "backend";
      }
      try {
        const response = await fetch(
          `${BASE_URL}/api/get-jobs?category=${category}`
        );
        const data = await response.json();
        setJobs(data.jobs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, [path]);

  return { jobs, loading, error };
};

import { useState, useEffect } from "react";
import { JobsInterface } from "../../../../models/types";

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
        const response = await fetch(`/api/get-jobs?category=${category}`);
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

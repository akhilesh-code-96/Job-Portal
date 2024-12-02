import { useState, useEffect } from "react";
import { JobAppInterface } from "../../../../models/types";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const usefetchJobApplication = (job_id: string) => {
  const [jobApplication, setJobApplication] = useState<JobAppInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobApplication = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/get-job-application?job_id=${job_id}`
        );
        const data = await response.data.applications;
        setJobApplication(data);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        if (error.response.status === 401) {
          setError(error.response.data.message);
        }
        setLoading(false);
      }
    };

    if (job_id) {
      fetchJobApplication();
    }

    // Cleanup function for aborting the request if needed
    return () => {
      setLoading(false);
      setError(null);
      setJobApplication([]);
    };
  }, [job_id]);

  return { jobApplication, loading, error };
};

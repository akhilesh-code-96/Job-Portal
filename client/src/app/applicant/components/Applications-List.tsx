import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../../components/Card";
import { JobAppInterface } from "../../../models/types";
import { usefetchJobApplication } from "../custom/hooks/fetchJobApplication.hook";

export const ApplicationsList = () => {
  const location = useLocation();
  const job_id: string = location?.state.job_id || "";
  const [matchedApplications, setMatchedApplications] = useState<
    JobAppInterface[]
  >([]);
  const { jobApplication, loading, error } = usefetchJobApplication(job_id);

  useEffect(() => {
    setMatchedApplications(jobApplication);
  }, [jobApplication]);

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div>{error && <p className="text-red-500">{error}</p>}</div>
      {!error &&
        matchedApplications.map((app: JobAppInterface) => (
          <Card
            key={app.job_id}
            job_id={app.job_id}
            position={app.position}
            firstname={app.firstname}
            lastname={app.lastname}
            email={app.email}
            resume={app.resume}
          />
        ))}
    </div>
  );
};

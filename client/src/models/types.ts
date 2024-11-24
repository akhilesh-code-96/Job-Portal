export interface MatchedJobInterface {
  position: string;
  location: string;
  job_description: string;
  updatedAt: string;
}

export interface JobsInterface {
  job_id: string;
  position: string;
  company: string;
  companyLogo: string;
  company_description: string;
  job_description: string[];
}

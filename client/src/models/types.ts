export interface JobsInterface {
  _id: string;
  job_id: string;
  position: string;
  company: string;
  companyLogo: string;
  company_description: string;
  job_description: string[];
  category?: string;
  location?: string;
  updatedAt?: string;
}

export interface ResumeInterface {
  name: string;
  lastModified: Date;
}

export interface JobAppInterface {
  job_id: string;
  position: string;
  firstname: string;
  lastname: string;
  email: string;
  resume: string;
}

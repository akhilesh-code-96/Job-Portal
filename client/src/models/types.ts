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

export interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string; // Add other environment variables as needed
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}

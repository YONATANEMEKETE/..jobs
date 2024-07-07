export type JobData = {
  jobCount: number;
  jobs: Job[];
};

export type Job = {
  id: number;
  url: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  jobIndustry: string[];
  jobType: string[];
  jobGeo: string;
  pubDate: string;
  annualSalaryMin?: string;
  annualSalaryMax?: string;
  salaryCurrency?: string;
};

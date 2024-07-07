import { useQuery } from '@tanstack/react-query';
import JobCard from './JobCard';
import { JobData } from '@/Services/type';

const JobList = () => {
  const handleJobs = async () => {
    const url =
      'https://jobicy.com/api/v2/remote-jobs?count=10&geo=usa&industry=marketing&tag=seo';

    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data } = useQuery<JobData, Error>({
    queryKey: ['jobs'],
    queryFn: handleJobs,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });

  const Jobs = data?.jobs;

  return (
    <div className="w-full grid grid-cols-1 min-[1100px]:grid-cols-2 gap-x-2 gap-y-4  space-y-4">
      {Jobs?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;

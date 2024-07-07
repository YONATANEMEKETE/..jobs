import { useJobStore } from '@/Services/myJobsStore';
import JobCard from './JobCard';

const MyJobList = () => {
  const { jobs } = useJobStore();

  return (
    <div className="mt-12 w-full grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 px-4 max-w-[1100px] mx-auto">
      {jobs.map((job, i) => {
        return <JobCard key={i} job={job} />;
      })}
    </div>
  );
};

export default MyJobList;

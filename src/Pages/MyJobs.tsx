import MyJobList from '@/components/myJobList';
import Navigation from '@/components/Navigation';
import ToggleLinks from '@/components/ToggleLinks';
import { useJobStore } from '@/Services/myJobsStore';

const MyJobs = () => {
  const { reset } = useJobStore();

  return (
    <div className="relative pb-10">
      <ToggleLinks />
      <Navigation />
      <div className="mt-10 md:mt-20  text-center  text-3xl md:text-5xl text-mytext font-headerfancy font-bold mb-10">
        Find The Perfect Jobs
      </div>
      <div className="grid justify-end text-xl text-mytext font-body font-bold outline outline-mytext px-4 py-4">
        <p
          onClick={reset}
          className="cursor-pointer w-fit px-4 py-2 hover:ring-2 hover:ring-mytext"
        >
          Remove All Jobs
        </p>
      </div>
      <MyJobList />
    </div>
  );
};

export default MyJobs;

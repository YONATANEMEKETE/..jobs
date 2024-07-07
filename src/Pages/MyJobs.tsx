import MyJobList from '@/components/myJobList';
import Navigation from '@/components/Navigation';
import ToggleLinks from '@/components/ToggleLinks';

const MyJobs = () => {
  return (
    <div className="relative pb-10">
      <ToggleLinks />
      <Navigation />
      <div className="mt-10 md:mt-20  text-center  text-3xl md:text-5xl text-mytext font-headerfancy font-bold">
        Find The Perfect Jobs
      </div>
      <MyJobList />
    </div>
  );
};

export default MyJobs;

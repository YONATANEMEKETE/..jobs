import JobDash from '@/components/JobDash';
import Navigation from '@/components/Navigation';

const Home = () => {
  return (
    <div className="relative h-[300vh]">
      <Navigation />
      <JobDash />
    </div>
  );
};

export default Home;

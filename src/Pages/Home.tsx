import JobDash from '@/components/JobDash';
import Navigation from '@/components/Navigation';

const Home = () => {
  return (
    <div className="relative pb-10">
      <Navigation />
      <JobDash />
    </div>
  );
};

export default Home;

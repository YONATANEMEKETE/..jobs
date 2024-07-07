import JobDash from '@/components/JobDash';
import Navigation from '@/components/Navigation';
import ToggleLinks from '@/components/ToggleLinks';

const Home = () => {
  return (
    <div className="relative pb-10">
      <ToggleLinks />
      <Navigation />
      <JobDash />
    </div>
  );
};

export default Home;

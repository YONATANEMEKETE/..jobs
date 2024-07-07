import { Button } from '@nextui-org/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const JobDash = () => {
  return (
    <div className="mt-12 px-6">
      <div className="w-full space-y-6">
        <div className="bg-myprimary pt-6 pb-4 px-4 rounded-lg shadow-lg">
          <div className="text-2xl text-mysecondary font-header1 font-semibold tracking-normal mb-4">
            Find Your Dream Job Here
          </div>

          <p className="w-2/3 min-[700px]:w-1/2  text-mysecondary font-body font-semibold mb-8">
            looking for jobs? browse our lastest openings to view and apply to
            the best
          </p>

          <SearchBar />
        </div>

        <div className="bg-white pt-4 pb-6 px-4 rounded-lg border border-mysecondary w-full">
          <div className="text-mytext text-xl font-header1 font-extrabold tracking-wide mb-4">
            Filters
          </div>
          <div className="w-full mx-auto grid grid-cols-1 min-[600px]:grid-cols-2 gap-y-4">
            <div className="w-[90%]">
              <Label
                className="text-mytext font-header2 font-bold mb-4"
                htmlFor="title"
              >
                Title/Keyword
              </Label>
              <Input type="text" id="title" placeholder="Programming" />
            </div>
            <div className="w-[90%]">
              <Label
                className="text-mytext font-header2 font-bold mb-4"
                htmlFor="industry"
              >
                Email
              </Label>
              <Input type="text" id="industry" placeholder="Tech" />
            </div>
            <div className="w-[90%]">
              <Label
                className="text-mytext text-header2 font-bold mb-4"
                htmlFor="Type"
              >
                Email
              </Label>
              <Input type="text" id="Type" placeholder="Full Time" />
            </div>
          </div>
        </div>
      </div>
      {/* <JobFilter /> */}
      <div></div>
    </div>
  );
};

export default JobDash;

function SearchBar() {
  return (
    <div className="w-full flex flex-wrap items-center justify-between py-2 px-4 bg-white rounded-lg">
      <input
        type="text"
        placeholder="Search"
        className="py-4 pl-4 bg-transparent basis-3/4 outline-none text-mytext text-lg font-body font-semibold"
      />
      <Button
        variant="solid"
        color="primary"
        className="bg-myprimary py-6 px-4 text-lg text-white font-body font-semibold"
      >
        Search
      </Button>
    </div>
  );
}

// function SelectLocation() {
//   return <div></div>;
// }

import { Button } from '@nextui-org/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import JobList from './JobList';

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

        <div className="bg-white pt-4 pb-6 px-4 rounded-lg  w-full flex flex-col items-start">
          <div className="text-mytext text-xl font-header1 font-extrabold tracking-wide mb-4">
            Filters
          </div>
          <div className="w-full mx-auto grid grid-cols-1 min-[600px]:grid-cols-2 gap-y-4 mb-10">
            <div className="w-[90%]">
              <Label
                className="text-mytext font-header2 font-bold mb-4"
                htmlFor="title"
              >
                Title/Keyword
              </Label>
              <Input type="text" id="title" placeholder="Programming" />
            </div>
            <SelectLocation required="industry" />
            <SelectLocation required="type" />
            <SelectLocation required="location" />
          </div>

          <Button
            variant="bordered"
            color="primary"
            className="border-myprimary py-6 px-8 text-lg text-mytext font-body font-bold self-end"
          >
            Apply
          </Button>
        </div>

        {/* job lists */}
        <JobList />
      </div>
      {/* <JobFilter /> */}
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

type LocationProp = {
  required?: string;
};

function SelectLocation({ required }: LocationProp) {
  const inquiry = required;

  if (inquiry === 'location') {
    return (
      <div className="">
        <Label
          className="text-mytext text-header2 font-bold mb-4"
          htmlFor="location"
        >
          Location
        </Label>
        <Select>
          <SelectTrigger className="w-[90%]">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-mytext font-body font-bold">
              <SelectItem value="anywhere">Anywhere</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
              <SelectItem value="Brazil">Brazil</SelectItem>
              <SelectItem value="Cannada">Cannada</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="UK">UK</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }

  if (inquiry === 'type') {
    return (
      <div>
        <Label
          className="text-mytext text-header2 font-bold mb-4"
          htmlFor="Type"
        >
          Job Type
        </Label>
        <Select>
          <SelectTrigger className="w-[90%]">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-mytext font-body font-bold">
              <SelectItem value="Full Time">Full Time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Part Time">Part Time</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }

  if (inquiry === 'industry') {
    return (
      <div>
        <Label
          className="text-mytext text-header2 font-bold mb-4"
          htmlFor="industry"
        >
          Industry
        </Label>
        <Select>
          <SelectTrigger className="w-[90%]">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-mytext font-body font-bold">
              <SelectItem value="Any Category">Any Category</SelectItem>
              <SelectItem value="Bussiness Development">
                Bussiness Development
              </SelectItem>
              <SelectItem value="Web and App Design">
                Web and App Design
              </SelectItem>
              <SelectItem value="Sales">Sales</SelectItem>
              <SelectItem value="Programming">Programming</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }
}

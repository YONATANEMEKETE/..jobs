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
    <div className="mt-12 px-6 flex items-start gap-x-4 ">
      <div className="w-full min-[750px]: space-y-6">
        <div className="bg-myprimary pt-6 pb-4 px-4 rounded-lg shadow-lg">
          <div className="text-2xl lg:text-5xl text-mysecondary font-header1 font-semibold tracking-normal mb-4">
            Find Your Dream Job Here
          </div>

          <p className="w-2/3 min-[700px]:w-1/2  text-mysecondary font-body font-semibold mb-8">
            looking for jobs? browse our lastest openings to view and apply to
            the best
          </p>

          <SearchBar />
        </div>

        <div className="bg-white pt-4 pb-6 px-4 rounded-lg  w-full flex min-[750px]:hidden flex-col items-start">
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
            {/* <SelectLocation required="type" /> */}
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
        <JobList
          industry={filters.industry}
          location={filters.location}
          title={filters.title}
        />
      </div>
      {/* <JobFilter /> */}
      <div className="hidden basis-[40%] bg-white pt-4 pb-6 px-4 rounded-lg  w-full min-[750px]:flex flex-col items-start">
        <div className="text-mytext text-xl font-header1 font-extrabold tracking-wide mb-4">
          Filters
        </div>
        <div className="w-full mx-auto grid grid-cols-1  gap-y-4 mb-10">
          <div className="w-[90%]">
            <Label
              className="text-mytext font-header2 font-bold mb-4"
              htmlFor="title"
            >
              Title/Keyword
            </Label>
            <Input
              onChange={(e) => (filters.title = e.target.value)}
              type="text"
              id="title"
              placeholder="phyton"
            />
          </div>
          <SelectLocation required="industry" />
          {/* <SelectLocation required="type" /> */}
          <SelectLocation required="location" />
        </div>

        <Button
          variant="bordered"
          color="primary"
          className="border-myprimary py-6 px-8 text-lg text-mytext font-body font-bold self-end"
        >
          Search
        </Button>
      </div>
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

let filters = {
  title: '',
  industry: 'dev',
  location: '',
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
        <Select onValueChange={(value) => (filters.location = value)}>
          <SelectTrigger className="w-[90%]">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-mytext font-body font-bold">
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="china">China</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
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
        <Select onValueChange={(value) => (filters.industry = value)}>
          <SelectTrigger className="w-[90%]">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-mytext font-body font-bold">
              <SelectItem value="copywritting">Copy Writting</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="Seller">Sales</SelectItem>
              <SelectItem value="dev">Programming</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }
}

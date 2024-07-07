import { Chip } from '@nextui-org/react';
import { Job } from '@/Services/type';
import { useJobStore } from '@/Services/myJobsStore';
// import { useState } from 'react';
import { Button } from '@nextui-org/button';

type cardProps = {
  job: Job;
  type?: string;
};

const JobCard = ({ job, type }: cardProps) => {
  const { addJob } = useJobStore();
  // const [isAdded, setIsAdded] = useState(false);

  const minSal = job.annualSalaryMin ? job.annualSalaryMin : '';
  const maxSal = job.annualSalaryMax ? job.annualSalaryMax : '';
  let salMin: string | undefined; // = minSal.slice(0, 3);
  let salMax: string | undefined;

  const date = new Date(job.pubDate);
  const month = date.getUTCMonth();
  const day = date.getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (minSal.length === 5) {
    salMin = minSal.slice(0, 2);
  } else {
    salMin = minSal.slice(0, 3);
  }
  if (maxSal.length === 5) {
    salMax = maxSal.slice(0, 2);
  } else {
    salMax = maxSal.slice(0, 3);
  }

  const handleJobs = () => {
    addJob(job);
  };

  return (
    <div className="w-full px-4 py-4 bg-mysecondary rounded-lg shadow-xl overflow-hidden cursor-pointer hover:ring-2 ring-myprimary transition-all duration-300 flex items-start justify-between flex-col">
      <div className="w-full">
        <div className="w-full flex items-start justify-between mb-2">
          <div className="flex flex-col basis-1/2">
            <p className="text-2xl text-mytext font-header2 font-bold">
              {job.jobTitle}
            </p>
            <p className="text-lg text-mytext font-body font-semibold">
              {job.companyName}
            </p>
          </div>

          <div className="rounded-full border border-mytext size-24 overflow-hidden">
            <img
              src={job.companyLogo}
              //
              className="size-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-6">
          <Chip
            radius="md"
            variant="bordered"
            className="text-sm text-mytext font-header2 font-semibold border-mytext"
          >
            {job.jobGeo}
          </Chip>
          <Chip
            radius="md"
            variant="bordered"
            className="text-sm text-mytext font-header2 font-semibold border-mytext"
          >
            {job.jobType.join(', ')}
          </Chip>

          {salMin && (
            <Chip
              radius="md"
              variant="bordered"
              className="text-sm text-mytext font-header2 font-semibold border-mytext"
            >
              {`${salMin}K - ${salMax}K ${job.salaryCurrency}/yr`}
            </Chip>
          )}
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-2">
        <p className="text-lg text-mytext font-body font-semibold">
          {`${monthNames[month]} ${day}`}
        </p>
        {type !== 'myJobs' ? (
          <div
            onClick={() => {
              handleJobs();
            }}
          >
            <label className="ui-bookmark">
              <input type="checkbox" />
              <div className="bookmark">
                <svg
                  viewBox="0 0 16 16"
                  style={{ marginTop: '4px' }}
                  className="bi bi-heart-fill"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
          </div>
        ) : (
          <a href={job.url}>
            <Button
              variant="solid"
              color="primary"
              className="bg-myprimary py-6 px-8 text-lg text-white font-body font-bold self-end"
            >
              Apply
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default JobCard;

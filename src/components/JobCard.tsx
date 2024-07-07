import { Chip } from '@nextui-org/react';

const JobCard = () => {
  return (
    <div className="w-full px-4 py-4 bg-mysecondary rounded-lg shadow-xl cursor-pointer hover:ring-1 ring-myprimary transition-all duration-300">
      <div className="flex items-start justify-between mb-2">
        <div className="flex flex-col basis-1/2">
          <p className="text-2xl text-mytext font-header2 font-bold">
            Software Developer
          </p>
          <p className="text-lg text-mytext font-body font-semibold">Adobe</p>
        </div>

        <div className="rounded-full border border-mytext size-24 overflow-hidden">
          <img
            src="https://api.escuelajs.co/api/v1/files/9fe8.jpg"
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
          Australia
        </Chip>
        <Chip
          radius="md"
          variant="bordered"
          className="text-sm text-mytext font-header2 font-semibold border-mytext"
        >
          Part Time
        </Chip>
        <Chip
          radius="md"
          variant="bordered"
          className="text-sm text-mytext font-header2 font-semibold border-mytext"
        >
          120K-150K/yr
        </Chip>
      </div>

      <div className="flex items-center justify-between px-2">
        <p className="text-lg text-mytext font-body font-semibold">
          June 25, 2024
        </p>
        <div>
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
      </div>
    </div>
  );
};

export default JobCard;

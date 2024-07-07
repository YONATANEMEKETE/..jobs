import { Bell, Settings, User } from 'lucide-react';
import { Button as Btn } from './ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className=" bg-mybg max-w-[1100px] min-[1100px]:mx-auto h-[4.5rem] sticky z-10 top-0 border shadow-xl rounded-b-lg flex items-center justify-between px-6">
      <div className="group text-3xl text-myaccent font-header1 font-extrabold cursor-pointer transition-all duration-300 hover:text-mytext">
        <span className="text-mytext group-hover:text-myaccent">..Jo</span>bs
      </div>
      <div className="hidden min-[990px]:flex items-center gap-4">
        <Link
          to="/"
          className="text-lg text-mytext font-header2 font-bold cursor-pointer transition-colors duration-300 hover:text-myprimary "
        >
          Find Jobs
        </Link>
        <Link
          to="/myjobs"
          className="text-lg text-mytext font-header2 font-bold cursor-pointer transition-colors duration-300 hover:text-myprimary "
        >
          My Jobs
        </Link>
        <p className="text-lg text-mytext font-header2 font-bold cursor-pointer transition-colors duration-300 hover:text-myprimary ">
          About Us
        </p>
        <p className="text-lg text-mytext font-header2 font-bold cursor-pointer transition-colors duration-300 hover:text-myprimary ">
          Help Center
        </p>
      </div>

      <div className="flex items-center gap-x-2">
        <Btn
          variant={'outline'}
          size={'icon'}
          className="cursor-pointer rounded-full "
        >
          <Bell className="size-6 " />
        </Btn>
        <Btn
          variant={'outline'}
          size={'icon'}
          className="cursor-pointer rounded-full "
        >
          <User className="size-6 " />
        </Btn>
        <Btn
          variant={'outline'}
          size={'icon'}
          className="cursor-pointer rounded-full min-[990px]:grid hidden  place-content-center"
        >
          <Settings className="size-6 m-auto" />
        </Btn>
      </div>
    </div>
  );
};

export default Navigation;

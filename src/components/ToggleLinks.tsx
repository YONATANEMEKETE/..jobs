import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { Button as Btn } from './ui/button';
import { AlignJustify } from 'lucide-react';

export default function ToggleLinks() {
  return (
    <div className="fixed z-40 bottom-12 left-8 min-[990px]:hidden">
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Btn
            variant={'secondary'}
            size={'icon'}
            className="rounded-md size-12"
          >
            <AlignJustify className="size-8" />
          </Btn>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownItem
            key="find"
            className="text-mytext font-header2 font-bold"
          >
            Find Jobs
          </DropdownItem>
          <DropdownItem
            key="myjobs"
            className="text-mytext font-header2 font-bold"
          >
            My Jobs
          </DropdownItem>
          <DropdownItem
            key="about"
            className="text-mytext font-header2 font-bold"
          >
            About Us
          </DropdownItem>
          <DropdownItem
            key="help"
            className="text-mytext font-header2 font-bold"
          >
            Help Center
          </DropdownItem>
          <DropdownItem
            key="settings"
            className="text-mytext font-header2 font-bold"
          >
            Settings
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

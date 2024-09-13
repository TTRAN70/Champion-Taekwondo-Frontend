import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { inter } from "@/app/fonts";
import Link from "next/link";

type PropData = {
  name: string;
  href: string;
};

export default function Dropdown({
  data,
  name,
  path,
}: {
  data: PropData[] | undefined;
  name: string;
  path: string;
}) {
  return (
    <Menu>
      <MenuButton
        className={`${inter.className} text-black data-[active]:bg-[#0065FF] data-[active]:text-white data-[open]:bg-[#0065FF] data-[open]:text-white relative mx-1 transition ease-in-out duration-200 rounded-lg px-3 py-1.5 xl:text-lg lg:text-lg font-extrabold`}
      >
        {name}
        <svg
          className={`size-4 inline-block relative left-[8%]`}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className={`${inter.className} transition duration-100 ease-out w-48 font-extrabold rounded-lg p-3 shadow-md bg-white`}
      >
        {data?.map((elem) => {
          return (
            <MenuItem key={elem.name}>
              <Link
                href={elem.href}
                className={
                  "text-black rounded-lg py-1 px-3 block data-[focus]:text-tkdblue"
                }
              >
                {elem.name}
              </Link>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

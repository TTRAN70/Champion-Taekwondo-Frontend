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
      {({ open }) => (
        <div>
          <MenuButton
            onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) =>
              open ? "" : event.currentTarget.click()
            }
            className={`${inter.className} text-black data-[active]:bg-[#0065FF] data-[active]:text-white data-[open]:bg-[#0065FF] data-[open]:text-white relative mx-1 transition ease-in-out duration-200 rounded-lg px-3 py-1.5 xl:text-lg lg:text-lg font-extrabold`}
          >
            {name}
          </MenuButton>
          <MenuItems
            anchor="bottom start"
            className={`${inter.className} transition duration-100 ease-out w-48 font-extrabold rounded-lg p-3 shadow-md bg-white focus-visible:outline-none`}
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
        </div>
      )}
    </Menu>
  );
}

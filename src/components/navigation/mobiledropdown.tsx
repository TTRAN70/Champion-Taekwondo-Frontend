import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { inter } from "@/app/fonts";
import clsx from "clsx";
import Link from "next/link";

type PropData = {
  name: string;
  href: string;
};

export default function MobileDropdown({
  data,
  name,
  isOpened,
  setOpen,
}: {
  data: PropData[] | undefined;
  name: string;
  isOpened: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Disclosure
      as="div"
      className="p-3 text-black rounded-lg py-1 my-1 px-5 cursor-pointer"
    >
      <DisclosureButton
        className={`${inter.className} group sm:text-md md:text-lg font-extrabold hover:text-tkdblue`}
      >
        {name}
        <svg
          className={clsx(
            `size-4 inline-block relative left-[3%] group-data-[open]:rotate-180`
          )}
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
      </DisclosureButton>
      <DisclosurePanel
        className={`${inter.className} font-extrabold rounded-2xl shadow-lg`}
      >
        {data?.map((elem) => {
          return (
            <Link
              key={elem.name}
              href={elem.href}
              className={clsx("text-black hover:text-tkdblue rounded-lg")}
            >
              <p
                className={clsx(
                  `${inter.className} text-md font-bold w-full p-3 rounded-lg`
                )}
                onClick={() => setOpen(false)}
              >
                {elem.name}
              </p>
            </Link>
          );
        })}
      </DisclosurePanel>
    </Disclosure>
  );
}

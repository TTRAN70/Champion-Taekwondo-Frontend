"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { inter } from "@/app/fonts";
import { staat } from "@/app/fonts";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "@/components/navigation/dropdown";
import MobileDropdown from "@/components/navigation/mobiledropdown";

const links = [
  { name: "HOME", href: "/", dropdown: false },
  { name: "CALENDAR", href: "/calendar", dropdown: false },
  { name: "GALLERY", href: "/gallery", dropdown: false },
  {
    name: "CLASSES",
    href: "/classes",
    dropdown: true,
    expand: [
      { name: "Kids", href: "/kidsctkd" },
      { name: "Teens + Adults", href: "/teensadultsctkd" },
      { name: "After School", href: "/afterschoolctkd" },
    ],
  },
  { name: "ABOUT", href: "/about", dropdown: false },
  {
    name: "MORE",
    href: "/more",
    dropdown: true,
    expand: [
      { name: "Contact", href: "/contact" },
      { name: "How to Join", href: "/howtojoin" },
    ],
  },
];

type Props = {
  isOpened: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavLinks() {
  const path = usePathname();
  return (
    <div
      className={clsx(
        "hidden xl:flex justify-center items-center self-center xl:mx-auto py-2 px-8 rounded-full",
        {}
      )}
    >
      {links.map((link) => {
        if (link.dropdown) {
          return (
            <Dropdown
              key={link.name}
              path={path}
              name={link.name}
              data={link.expand}
            />
          );
        } else {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                `${inter.className} relative mx-1 transition ease-in-out duration-200 rounded-lg px-3 py-1.5 xl:text-lg lg:text-lg font-extrabold`,
                {
                  "text-black hover:bg-altgrey":
                    path != link.href && path == "/",
                  "text-white hover:bg-neutral-800 bg-[#0065FF]":
                    path == link.href,
                  "text-white hover:bg-neutral-800":
                    path != link.href && path != "/",
                }
              )}
            >
              {link.name}
            </Link>
          );
        }
      })}
    </div>
  );
}

export function MobileSideBar({ isOpened, setOpen }: Props) {
  const path = usePathname();
  return (
    <div
      data-state={isOpened ? "open" : "closed"}
      className="data-[state=closed]:-translate-x-full data-[state=closed]:duration-300 data-[state=open]:translate-x-0 data-[state=open]:duration-500 transition ease-in-out absolute top-0 left-0 z-50 h-screen w-2/3 md:w-1/3 bg-white shadow-md p-6 pr-5"
    >
      <div className="flex items-center justify-between gap-x-2 border-b border-zinc-200 pb-5">
        <div className="flex items-center gap-x-1 min-[420px]:gap-x-2">
          <div
            className={`${staat.className} text-black text-md sm:text-lg lg:text-xl`}
          >
            Champion
          </div>
          <div className="relative w-10 h-10">
            <Image
              src="/ctkdlogo.png"
              fill
              style={{ objectFit: "contain" }}
              alt="CTKD Logo"
            />
          </div>
          <div
            className={`${staat.className} text-black text-md sm:text-lg lg:text-xl`}
          >
            Taekwondo
          </div>
        </div>
        <button
          type="button"
          className="bg-white rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          onClick={() => setOpen(false)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col mt-5">
        {links.map((link) => {
          if (link.dropdown) {
            return (
              <MobileDropdown
                key={link.name}
                name={link.name}
                data={link.expand}
                isOpened={isOpened}
                setOpen={setOpen}
              />
            );
          } else {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "p-3 text-black hover:text-tkdblue rounded-lg py-1 my-1 px-5",
                  {
                    "bg-[#0065FF] hover:bg-[#0065FF]": path == link.href,
                  }
                )}
                onClick={() => setOpen(false)}
              >
                <p
                  className={clsx(
                    `${inter.className} sm:text-md md:text-lg font-extrabold`,
                    {
                      "text-white": path == link.href,
                    }
                  )}
                >
                  {link.name}
                </p>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

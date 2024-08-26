"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { inter } from "@/app/fonts";
import { staat } from "@/app/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Calendar", href: "/calendar" },
  { name: "Gallery", href: "/gallery" },
  { name: "Classes", href: "/classes" },
  { name: "About", href: "/about" },
  { name: "More", href: "/more" },
];

type Props = {
  isOpened: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavLinks() {
  const path = usePathname();
  let [activeTab, setActiveTab] = useState<string>(path);
  return (
    <div
      className={clsx(
        "hidden xl:flex justify-center items-center self-center xl:mx-auto 2xl:ml-28 py-2 px-8 rounded-full",
        {
          "bg-[#5C5C5C]/[.3]": path != "/",
          "bg-[#5C5C5C]/[.1]": path == "/",
        }
      )}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `${inter.className} relative mx-1 transition ease-in-out duration-200 rounded-full px-3 py-1.5 xl:text-lg lg:text-lg font-bold`,
              {
                "text-black hover:bg-gray-300":
                  activeTab != link.href && path == "/",
                "text-white hover:bg-neutral-800 bg-[#0065FF]":
                  activeTab == link.href,
                "text-white hover:bg-neutral-800":
                  activeTab != link.href && path != "/",
              }
            )}
            onClick={() => setActiveTab(link.href)}
          >
            {link.name}
          </Link>
        );
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
          <div className={`${staat.className} text-black text-xl`}>
            Champion
          </div>
          <div>
            <Image
              src="/ctkdlogo.png"
              width={30}
              height={30}
              alt="CTKD Logo"
              className="hidden min-[420px]:block"
            />
          </div>
          <div className={`${staat.className} text-black text-xl`}>
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
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("p-3 text-gray-700 hover:text-black", {
                "bg-[#0065FF] rounded-full py-1 my-1 px-5": path == link.href,
              })}
              onClick={() => setOpen(false)}
            >
              <p
                className={clsx(
                  `${inter.className} sm:text-md md:text-lg font-bold`,
                  {
                    "text-white": path == link.href,
                  }
                )}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

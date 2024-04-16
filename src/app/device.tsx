"use client";

import Image from "next/image";
import { staat } from "@/app/fonts";
import { NavLinks, MobileSideBar } from "@/app/nav-links";
import { useState } from "react";

export default function Device() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

export function Desktop() {
  return (
    <>
      <div className="hidden xl:flex justify-center items-center gap-x-7">
        <div className={`${staat.className} text-white text-4xl`}>Champion</div>
        <div>
          <Image src="/ctkdlogo.png" width={100} height={100} alt="CTKD Logo" />
        </div>
        <div className={`${staat.className} text-white text-4xl`}>
          Taekwondo
        </div>
      </div>
      <NavLinks />
    </>
  );
}

export function Mobile() {
  const [isOpened, setOpen] = useState<boolean>(false);
  return (
    <>
      {isOpened && (
        <div className="block xl:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"></div>
      )}
      <MobileSideBar isOpened={isOpened} setOpen={setOpen} />
      <div className="flex xl:hidden justify-center items-center bg-[#5C5C5C]/[.3] self-center rounded-full">
        <button
          onClick={() => setOpen(true)}
          className="navbar-burger flex items-center text-white p-3"
        >
          <svg
            className="block h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div className="flex xl:hidden items-center ml-6 md:ml-10">
        <div className={`${staat.className} text-white text-3xl md:text-4xl`}>
          Champion Taekwondo
        </div>
      </div>{" "}
    </>
  );
}

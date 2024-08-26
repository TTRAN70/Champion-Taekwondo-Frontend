"use client";

import Image from "next/image";
import { staat } from "@/app/fonts";
import { NavLinks, MobileSideBar } from "@/app/nav-links";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Device() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

export function Desktop() {
  const path = usePathname();
  return (
    <>
      <div className="hidden xl:flex justify-center items-center gap-x-7">
        <div
          className={clsx(`${staat.className} text-3xl`, {
            "text-black": path == "/",
            "text-white": path != "/",
          })}
        >
          Champion
        </div>
        <div>
          <Image src="/ctkdlogo.png" width={100} height={100} alt="CTKD Logo" />
        </div>
        <div
          className={clsx(`${staat.className} text-3xl`, {
            "text-black": path == "/",
            "text-white": path != "/",
          })}
        >
          Taekwondo
        </div>
      </div>
      <NavLinks />
    </>
  );
}

export function Mobile() {
  const [isOpened, setOpen] = useState<boolean>(false);
  const path = usePathname();
  return (
    <>
      {isOpened && (
        <div className="block xl:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"></div>
      )}
      <MobileSideBar isOpened={isOpened} setOpen={setOpen} />
      <div
        className={clsx(
          "flex xl:hidden justify-center items-center self-center rounded-full",
          {
            "bg-[#5C5C5C]/[.3]": path != "/",
            "bg-[#f1f5f9]": path == "/",
          }
        )}
      >
        <button
          onClick={() => setOpen(true)}
          className={clsx("navbar-burger flex items-center p-3", {
            "text-white": path != "/",
            "text-black": path == "/",
          })}
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
        <Image src="/ctkdlogo.png" width={50} height={50} alt="CTKD Logo" />
      </div>{" "}
    </>
  );
}

"use client";

import Device from "@/app/device";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();
  return (
    <div
      className={clsx(
        "w-full bg-black h-24 md:h-44 flex pl-5 md:pl-20 sticky top-0 z-50",
        {
          "bg-white": path == "/",
        }
      )}
    >
      <Device />
    </div>
  );
}

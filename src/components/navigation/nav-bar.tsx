"use client";

import Device from "@/components/navigation/device";

export default function NavBar() {
  return (
    <div className="w-full bg-white h-24 md:h-32 flex pl-5 md:pl-20 sticky xl:static top-0 z-50 shadow-lg">
      <Device />
    </div>
  );
}

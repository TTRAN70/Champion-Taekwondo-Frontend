import Image from "next/image";
import { josefin, inter } from "@/app/fonts";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[35rem] sm:h-[41rem] relative rounded-[2rem] overflow-hidden flex items-center justify-center">
      <Image
        src="/Landing1.jpg"
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(50%)",
        }}
        alt="Students putting their hand over their chest"
      />
      <div className="px-10 flex flex-col text-white sm:items-start lg:px-44 gap-y-6">
        <div
          className={`${josefin.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center self-center text-4xl md:text-6xl font-medium`}
        >
          BE THE BEST YOU.
        </div>
        <div
          className={`${josefin.className} text-center self-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-xl md:text-2xl font-normal`}
        >
          Join and embark on a journey of self-discipline, strength, and
          confidence.
        </div>
        <div
          className={`${inter.className} transition duration-200 ease-in text-lg sm:text-lg font-bold bg-[#4583E1] hover:bg-[#2364C8] w-[210px] self-center rounded-full mt-5 z-40`}
        >
          <Link href="/join">
            <div
              className={`${josefin.className} flex items-center justify-center px-3 py-3 sm:px-5 sm:py-4`}
            >
              <div className="pt-1">GET STARTED </div>
              <svg
                className="h-6 w-6 ml-2 text-white"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="5" y1="12" x2="19" y2="12" />{" "}
                <line x1="13" y1="18" x2="19" y2="12" />{" "}
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

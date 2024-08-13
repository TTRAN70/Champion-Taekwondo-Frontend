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
          filter: "brightness(30%)",
        }}
        alt="Landing page image"
      />
      <div className="px-10 flex flex-col text-white sm:items-start lg:px-44 gap-y-6">
        <div
          className={`${josefin.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center self-center text-4xl md:text-6xl font-medium`}
        >
          Become unrecognizable.
        </div>
        <div
          className={`${josefin.className} text-center self-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-xl md:text-2xl font-normal`}
        >
          Join us and embark on a journey of self-discipline, strength, and
          confidence
        </div>
        <div
          className={`${inter.className} transition duration-200 ease-in text-lg sm:text-xl font-bold bg-[#4583E1] hover:bg-[#2364C8] w-[210px] self-center rounded-full mt-5 z-40`}
        >
          <Link href="/join">
            <div className="flex items-center justify-center px-3 py-3 sm:px-5 sm:py-4">
              Get Started{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

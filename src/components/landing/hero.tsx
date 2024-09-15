import { josefin, inter } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[35rem] sm:h-[41rem] relative rounded-[2rem] overflow-hidden flex items-center justify-center">
      <Image
        src="/belts.jpg"
        alt="picture of taekwondo medals"
        fill
        style={{ objectFit: "cover" }}
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL="/belts.jpg"
        className="brightness-[30%]"
      />
      <div className="px-10 flex flex-col text-white sm:items-start lg:px-44 gap-y-6">
        <div
          className={`${josefin.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center self-center text-4xl md:text-6xl font-medium`}
        >
          BECOME A CHAMPION
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
          <Link href="/contact">
            <div
              className={`${inter.className} flex items-center justify-center px-3 py-3 sm:px-5 sm:py-4`}
            >
              <div>Learn more </div>
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
    </section>
  );
}

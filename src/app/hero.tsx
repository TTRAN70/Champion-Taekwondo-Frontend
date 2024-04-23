import Image from "next/image";
import { josefin, inter } from "@/app/fonts";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[40rem] sm:h-[50rem] relative rounded-[2rem] sm:rounded-[5rem] overflow-hidden flex items-center justify-center lg:justify-normal">
      <Image
        src="/Landing1.jpg"
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(50%)",
          zIndex: "-1",
        }}
        alt="Landing page image"
      />
      <div className="px-2 sm:px-0 flex flex-col text-white lg:pl-44 gap-y-6 lg:w-[60%] md:w-[80%]">
        <div
          className={`${josefin.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center lg:text-left text-3xl md:text-6xl font-medium`}
        >
          Welcome, to our growing family
        </div>
        <div
          className={`${inter.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center lg:text-left text-md font-normal`}
        >
          With friendly and exciting classes for all age groups, fitness levels,
          and for fun or serious training...we are the Tae Kwon Do family for
          you!
        </div>
        <div
          className={`${inter.className} self-center lg:self-auto text-lg sm:text-xl font-bold bg-[#4583E1] w-[210px] rounded-full`}
        >
          <Link href="/join">
            <div className="flex items-center justify-center px-3 py-3 sm:px-5 sm:py-4">
              Learn more{" "}
              <svg
                className="h-7 w-7 text-white inline relative left-2"
                width="24"
                height="24"
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

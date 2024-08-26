import { josefin, inter } from "@/app/fonts";
import { ctaList } from "@/app/lib/ctadata";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="mt-20 px-10 md:px-40 pb-20">
      <div className="flex flex-col 2xl:flex-row gap-x-10 gap-y-10">
        <div className="md:basis-1/3">
          <h2
            className={`${josefin.className} text-white bg-tkdblue rounded-lg p-2 text-3xl font-bold mb-10`}
          >
            Sign up Today!
          </h2>
          {ctaList.map((cta) => {
            return (
              <div key={cta.headline} className="my-5">
                <div
                  className={`${inter.className} text-black text-md font-bold`}
                >
                  {cta.headline}
                </div>
                <p className={`${inter.className} text-black text-md`}>
                  {cta.subtext}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-3 xl:gap-y-0 w-full h-[40rem] xl:h-[60rem]">
          <div className="grow relative h-[35%] w-full">
            <Image
              src="/split.jpg"
              objectFit={"cover"}
              fill
              alt="Girl doing splits"
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="grow relative h-[40%] w-[47%]">
            <Image
              src="/GRAMPS.jpg"
              objectFit={"cover"}
              fill
              alt="Grandpa and student"
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="grow relative h-[40%] w-[47%]">
            <Image
              src="/apchagi.jpg"
              objectFit={"cover"}
              fill
              alt="Student doing front kick"
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className={`${josefin.className} flex flex-col justify-center items-center text-black text-2xl md:text-2xl lg:text-4xl font-bold mx-auto mt-10 shadow-2xl rounded-xl px-5 sm:px-20 py-3`}
          >
            Come Kick With Us!
            <div className="flex gap-x-5">
              <div
                className={`${inter.className} transition duration-200 ease-in text-xs xl:text-sm font-bold bg-[#4583E1] hover:bg-[#2364C8] sm:w-[150px] self-center rounded-full mt-5`}
              >
                <Link href="/join">
                  <div className="flex items-center justify-center text-white px-2 py-2 sm:px-5 sm:py-4">
                    Get Started{" "}
                  </div>
                </Link>
              </div>
              <div
                className={`${inter.className} border border-black transition duration-200 ease-in text-xs xl:text-sm font-bold bg-white hover:bg-black sm:w-[150px] self-center rounded-full mt-5`}
              >
                <Link href="/join">
                  <div className="flex items-center justify-center text-black hover:text-white px-2 py-2 sm:px-5 sm:py-4">
                    Directions{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

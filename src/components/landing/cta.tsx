import { josefin, inter } from "@/app/fonts";
import { ctaList } from "@/app/lib/ctadata";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="mt-20 px-10 md:px-20">
      <div className="flex flex-col 2xl:flex-row gap-x-10 gap-y-10">
        <div className="md:basis-1/3">
          <h2
            className={`${josefin.className} text-black rounded-lg text-3xl font-bold mb-10`}
          >
            Our Values
          </h2>
          {ctaList.map((cta) => {
            return (
              <div key={cta.headline} className="my-5">
                <div
                  className={`${inter.className} text-black text-md font-extrabold`}
                >
                  {cta.headline}
                </div>
                <p className={`${inter.className} text-black text-md`}>
                  {cta.subtext}
                </p>
              </div>
            );
          })}
          <div
            className={`${josefin.className} flex flex-col justify-center items-center text-black text-2xl md:text-2xl lg:text-4xl font-bold mx-auto mt-10 rounded-xl px-5 sm:px-20 py-3`}
          >
            <div className="flex gap-x-5">
              <div
                className={`${inter.className} transition duration-200 ease-in text-xs xl:text-sm font-bold bg-[#4583E1] hover:bg-[#2364C8] w-[130px] sm:w-[150px] self-center rounded-full mt-5`}
              >
                <Link href="/join">
                  <div className="flex items-center justify-center text-white px-2 py-2 sm:px-5 sm:py-4">
                    Contact us{" "}
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
              <div
                className={`${inter.className} border border-black transition duration-200 ease-in text-xs xl:text-sm font-bold bg-white hover:bg-black sm:w-[150px] self-center rounded-full mt-5`}
              >
                <Link href="/join">
                  <div className="flex items-center justify-center text-black hover:text-white px-3 py-3 sm:px-5 sm:py-4">
                    Directions{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-x-2 gap-y-3 xl:gap-y-0 w-full h-[40rem] xl:h-[60rem]">
          <div className="grow relative h-[40%] w-[47%] bottom-[10%]">
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
          <div className="grow relative h-[40%] w-[47%] bottom-[10%]">
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
        </div>
      </div>
    </div>
  );
}

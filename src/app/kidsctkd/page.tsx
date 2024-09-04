import Image from "next/image";
import { josefin, inter } from "@/app/fonts";
import Link from "next/link";
import { kidsctkddata } from "@/app/lib/classdata";

export default function KidsCTKD() {
  return (
    <main className="min-h-screen bg-altgrey">
      <div className="w-full h-96 relative">
        <Image
          src="/kidsctkd.jpg"
          fill
          style={{
            objectFit: "cover",
          }}
          alt="Master Lee handing out medals and awards"
        />
        <div className="text-white w-full h-96 absolute bg-[#4583E1]/75 flex items-center justify-center">
          <div
            className={`${josefin.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-bold text-3xl sm:text-5xl lg:text-7xl`}
          >
            KIDS TAEKWONDO
          </div>
        </div>
      </div>
      <div className="w-full h-64 flex flex-col justify-center items-center px-10 sm:px-20 xl:px-64 gap-y-10 pt-20 mb-20">
        <h3
          className={`${inter.className} text-2xl sm:text-4xl lg:text-5xl text-center font-extrabold`}
        >
          Kids love Champion Taekwondo!
        </h3>
        <p
          className={`${inter.className} text-sm text-[#575757] sm:text-md lg:text-lg text-center`}
        >
          Our martial arts programs are high-energy, fun and interactive with
          the goal of being able to build our student&apos;s self esteem, which
          we do by acknowledging, recognizing and rewarding not just our
          student&apos;s accomplishments and successes, but through their
          efforts as well!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full bg-white rounded-t-[5rem] py-14">
          <p
            className={`${josefin.className} px-2 mx-auto text-center text-lg sm:text-2xl mb-5 font-bold`}
          >
            <span className="">
              <Image
                src="/increase.svg"
                alt="arrows pointing up"
                width={15}
                height={15}
                className="inline-block relative -top-1 -left-1"
              />
              Positive Changes{" "}
            </span>{" "}
            Kids Have Had
          </p>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4">
            {kidsctkddata.map((elem) => {
              return (
                <div
                  className="relative overflow-hidden rounded-lg bg-background p-2"
                  key={elem.title}
                >
                  <div className="flex h-40 flex-col rounded-md p-5">
                    <Image
                      src={elem.src}
                      alt={elem.alt}
                      width={50}
                      height={50}
                      className="self-center"
                    />
                    <h3
                      className={`font-medium self-center text-xl mt-10 ${josefin.className}`}
                    >
                      {elem.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <iframe
            width="560"
            height="315"
            className="mx-auto border border-gray-200 rounded-lg mt-20 w-[320px] h-[180px] lg:w-[560px] lg:h-[315px] sm:w-[400px] sm:h-[225px]"
            src="https://www.youtube.com/embed/WqRWkTQbbzc?si=ieaiGhZPwl7UMee_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="font-bold flex justify-center mt-5">
            *Earliest enrollment age is 5
          </div>
        </div>
      </div>
    </main>
  );
}

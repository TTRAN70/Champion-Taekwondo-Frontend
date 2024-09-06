import Image from "next/image";
import { josefin, inter } from "@/app/fonts";
import Link from "next/link";
import { changes, benefits } from "@/app/lib/kidsctkddata";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

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
          className={`${inter.className} font-medium text-sm text-[#000000]/80 sm:text-md lg:text-lg text-center`}
        >
          High-energy, fun and interactive classes for kids, designed to help
          them grow for the future.
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
            {changes.map((elem) => {
              return (
                <ChangesComponent
                  key={elem.title}
                  title={elem.title}
                  src={elem.src}
                  alt={elem.alt}
                />
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
          <div
            className={`${inter.className} flex justify-center items-center flex-col pt-20 px-10 pb-10`}
          >
            <h3 className="text-5xl font-bold pb-10">Benefits of Taekwondo</h3>
            <p className="text-md font-normal pb-10">
              The more classes a kid takes - the better it will be for their
              future.
            </p>
            <div className="mx-auto w-full max-w-lg divide-y divide-black/5 rounded-xl bg-black/5">
              {benefits.map((elem) => {
                return (
                  <BenefitsComponent
                    key={elem.title}
                    title={elem.title}
                    desc={elem.desc}
                  />
                );
              })}
            </div>
          </div>
          <div className="container lg:w-[60%] mx-auto py-14 px-6 sm:p-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-primary text-primary-foreground p-6 rounded-lg">
                <h2 className="text-5xl font-bold mb-4">What to Expect</h2>
                <p className="py-5 font-medium">
                  Classes that we guarantee - without worry.
                </p>
                <ul className="space-y-6 list-none pl-5 pt-8 font-medium">
                  <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                    Structured Classes
                  </li>
                  <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                    Expert Instructors
                  </li>
                  <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                    Safe and Supportive Environment
                  </li>
                </ul>
              </div>
              <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[30rem] md:h-auto">
                <Image
                  src="/whitebeltkids.jpg"
                  alt="Kids practicing form of taekwondo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function BenefitsComponent({ title, desc }: { title: string; desc: string }) {
  return (
    <Disclosure
      as="div"
      className="p-6"
      defaultOpen={title === "Building Confidence" ? true : false}
    >
      <DisclosureButton className="group flex w-full items-center">
        <span className="w-5 h-5 relative mr-2">
          <Image
            src="/checkmark.svg"
            alt="blue checkmark"
            fill
            objectFit="contain"
          />
        </span>
        <span className="text-sm/6 font-bold text-black self-start group-data-[hover]:text-black/80">
          {title}
        </span>
      </DisclosureButton>
      <DisclosurePanel className="mt-2 text-sm/5 font-medium text-black/70">
        {desc}
      </DisclosurePanel>
    </Disclosure>
  );
}

function ChangesComponent({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-background p-2">
      <div className="flex h-40 flex-col rounded-md p-5">
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="self-center"
        />
        <h3
          className={`font-medium self-center text-xl mt-10 ${josefin.className}`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

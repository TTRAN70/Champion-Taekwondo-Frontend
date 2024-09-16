import Image from "next/image";
import { josefin, inter } from "@/app/fonts";
import Link from "next/link";
import { changes, benefits } from "@/app/lib/kidsctkddata";
import { Suspense } from "react";
import { YouTubeSkeleton } from "@/app/skeletons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Taekwondo",
};

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
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/kidsctkd.jpg"
          priority
        />
        <div className="text-white w-full h-96 absolute bg-[#4583E1]/1 flex items-center justify-center">
          <div
            className={`${josefin.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-bold text-3xl sm:text-5xl lg:text-7xl`}
          >
            KIDS TAEKWONDO
          </div>
        </div>
      </div>
      <div className="w-full h-64 flex flex-col justify-center items-center px-10 sm:px-20 xl:px-64 gap-y-10 py-20">
        <h3 className={`${josefin.className} text-4xl font-extrabold`}>
          Kids love Champion Taekwondo!
        </h3>
        <p
          className={`${inter.className} font-medium text-sm text-[#000000]/80 sm:text-md lg:text-lg`}
        >
          High-energy, fun and interactive classes for kids, designed to help
          them grow for the future.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full bg-white rounded-t-[3rem] py-20">
          <p
            className={`${inter.className} px-4 mx-auto text-black text-center text-4xl mb-14 font-bold`}
          >
            Positive Changes Kids Have Obtained
          </p>
          <div className="px-3 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4">
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
          <Suspense fallback={<YouTubeSkeleton />}>
            <iframe
              width="560"
              height="315"
              className="mx-auto border border-gray-200 rounded-lg mt-16 w-[320px] h-[180px] lg:w-[560px] lg:h-[315px] sm:w-[400px] sm:h-[225px]"
              src="https://www.youtube.com/embed/WqRWkTQbbzc?si=ieaiGhZPwl7UMee_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Suspense>
          <div className="font-bold flex justify-center mt-5">
            *Earliest enrollment age is 5
          </div>
          <div className="flex flex-col justify-center items-center p-7 pt-20">
            <h3 className="text-4xl font-bold mb-10">
              Benefits of Taekwondo for Kids
            </h3>
            <p className="text-md font-normal">
              What makes taekwondo for kids so great!
            </p>
          </div>
          <div className="container lg:w-[60%] mx-auto py-14 px-6 sm:p-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div
                  className={`${josefin.className} flex justify-center items-center flex-col`}
                >
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
              </div>
              <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[30rem] md:h-auto">
                <Image
                  src="/kidsbenefits.jpg"
                  alt="kid practicing taekwondo form"
                  fill
                  className="rounded-lg"
                  style={{ objectFit: "cover" }}
                  sizes="90vw"
                />
              </div>
            </div>
          </div>
          <div className="container lg:w-[60%] mx-auto px-6 sm:px-16 sm:py-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-primary text-primary-foreground p-4 rounded-lg">
                <h2 className={`${josefin.className} text-4xl font-bold mb-4`}>
                  What to Expect
                </h2>
                <p className="py-5 font-medium">
                  We ensure that every child has a chance to succeed
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
                  sizes="50vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-tkdblue p-14 text-center text-white">
        <h3 className="text-4xl font-bold pb-10">Let's get in touch</h3>
        <p className="text-md font-normal pb-10">Start your journey today!</p>
        <div
          className={`${inter.className} mx-auto transition duration-200 ease-in text-lg sm:text-lg font-bold bg-black hover:bg-black/70 w-[210px] self-center rounded-full z-40`}
        >
          <Link href="/contact">
            <div
              className={`${josefin.className} flex items-center justify-center px-3 py-3 sm:px-5 sm:py-4`}
            >
              <div className="pt-1">Contact us </div>
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
    </main>
  );
}

function BenefitsComponent({ title, desc }: { title: string; desc: string }) {
  return (
    <Disclosure as="div" className="p-6" defaultOpen={true}>
      <DisclosureButton className="group flex w-full items-center">
        <span className="w-5 h-5 relative mr-2">
          <Image
            src="/checkmark.svg"
            alt="blue checkmark"
            fill
            style={{ objectFit: "contain" }}
          />
        </span>
        <span className="text-sm font-bold text-black self-start group-data-[hover]:text-black/80">
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
    <div className="relative overflow-hidden rounded-lg bg-background p-2 bg-altgrey rounded-xl">
      <div className="flex h-40 flex-col rounded-md p-5">
        <Image
          src="/increase.svg"
          alt="arrows pointing up"
          width={15}
          height={15}
          className="inline-block relative -top-1 -left-1"
        />
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="self-center"
          placeholder="blur"
          blurDataURL={src}
        />
        <h3
          className={`self-center text-xl font-bold mt-10 ${inter.className}`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

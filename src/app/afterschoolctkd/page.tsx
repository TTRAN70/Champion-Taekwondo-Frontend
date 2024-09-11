import Image from "next/image";
import { josefin, inter } from "@/app/fonts";
import Link from "next/link";

const bullets = [
  "FREE pick-up from school",
  "Qualified child care professionals",
  "Martial arts classes included",
  "Leadership training",
  "Physical fitness training and activities",
  "Time between classes to do homework",
  "Rewards program",
  "Belt promotion graduation events, and in-house tournaments",
  "All black belt instructors",
];

export default function AfterSchoolCTKD() {
  return (
    <main className="min-h-screen bg-altgrey">
      <div className="w-full h-96 relative">
        <Image
          src="/soccer.jpg"
          fill
          style={{
            objectFit: "cover",
          }}
          alt="Performance by a black belt"
        />
        <div className="text-white w-full h-96 absolute bg-[#4583E1]/90 flex items-center justify-center">
          <div
            className={`${josefin.className} drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-bold text-xl sm:text-5xl lg:text-6xl`}
          >
            AFTER SCHOOL PROGRAM
          </div>
        </div>
      </div>
      <div className="container lg:w-[80%] mx-auto py-14 px-6 sm:p-16 text-center mt-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-primary text-primary-foreground p-6 rounded-lg">
            <h2
              className={`${josefin.className} text-xl lg:text-2xl xl:text-4xl font-bold mb-4 !leading-relaxed`}
            >
              Tired of the <span className="text-tkdblue">usual</span> after
              school programs where children run wild in an{" "}
              <span className="text-tkdblue">unstructured environment?</span>
            </h2>
          </div>
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[20rem] sm:h-[30rem] md:h-auto">
            <Image
              src="/child.png"
              alt="Tired child"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="container lg:w-[80%] mx-auto py-14 px-6 sm:p-16 text-center mt-10">
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[20rem] sm:h-[30rem] md:h-auto">
            <Image
              src="/tired.png"
              alt="Tired woman"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 bg-primary text-primary-foreground p-6 rounded-lg">
            <h2
              className={`${josefin.className} text-xl lg:text-2xl xl:text-4xl font-bold mb-4 !leading-relaxed`}
            >
              or running from{" "}
              <span className="text-tkdblue">one activity to another</span>{" "}
              exhausting{" "}
              <span className="text-tkdblue">you and your child?</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container xl:w-[80%] mx-auto pt-14 px-6 lg:px-16 sm:pt-16">
        <div className="flex flex-col md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
          <div className="flex-1 bg-primary text-primary-foreground p-6 rounded-lg">
            <h2
              className={`${josefin.className} text-5xl font-bold mb-4 relative pb-8`}
            >
              Enroll today
              <div className="absolute w-20 h-1 bg-tkdblue top-[100%]"></div>
            </h2>
            <p className="py-5 font-medium">
              Create success for your child - in the classroom and in their
              life.
            </p>
            <p className="font-medium leading-relaxed">
              Students are escorted and transported from a number of schools
              within the Pinellas County. Safety, convenience, expert training,
              and fun activities help inspire the children while instilling
              discipline, respect, patience, coordination, sportsmanship,
              self-confidence and creativity.
            </p>
          </div>
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[30rem] md:h-auto">
            <Image
              src="/kidsrunning.jpg"
              alt="Kids running"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container xl:w-[80%] mx-auto px-6 lg:px-16 py-4 mb-10">
        <div className="flex flex-col md:flex-row gap-x-2 xl:gap-x-10 gap-y-10">
          <div className="flex-1 bg-primary text-primary-foreground p-6 rounded-lg">
            <ul className="space-y-6 list-none font-medium">
              {bullets.map((elem, index) => {
                return (
                  <li key={index} className="group flex w-full items-center">
                    <span className="w-5 h-5 relative mr-2">
                      <Image
                        src="/checkmark.svg"
                        alt="blue checkmark"
                        fill
                        objectFit="contain"
                      />
                    </span>{" "}
                    <span>{elem}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 bg-primary text-primary-foreground p-6 rounded-lg">
            <h2 className={`${josefin.className} text-5xl font-bold mb-4`}>
              Current elementary schools
            </h2>
            <p className="py-2 font-medium">Schools we pick up from.</p>
            <ul className="space-y-6 list-none pl-5 pt-8 font-medium">
              <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                Bardmoor
              </li>
              <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                Madeira Beach
              </li>
              <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                Starkey
              </li>
              <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                Walsingham
              </li>
              <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:-left-5 before:top-2">
                (Student drop-off accepted)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-tkdblue p-10 sm:p-20 text-center text-white">
        <h3 className="text-5xl font-bold pb-10">Let's get in touch</h3>
        <p className="text-md font-normal pb-10">
          Don't worry, you won't bother us
        </p>
        <div
          className={`${inter.className} mx-auto transition duration-200 ease-in text-lg sm:text-lg font-bold bg-black hover:bg-black/70 w-[210px] self-center rounded-full z-40`}
        >
          <Link href="/join">
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

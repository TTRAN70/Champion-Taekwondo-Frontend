"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { josefin } from "@/app/fonts";

export default function About() {
  const viewRef = useRef(null);
  const twoviewRef = useRef(null);
  const twoinView = useInView(twoviewRef, { once: true });
  const threeviewRef = useRef(null);
  const threeinView = useInView(threeviewRef, { once: true });
  const inView = useInView(viewRef, { once: true });
  const parent = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };
  return (
    <main className="min-h-screen bg-white relative">
      <Image
        src="/blob.svg"
        fill
        alt="curved background image"
        objectFit="cover"
      />
      <div className="container xl:w-[80%] mx-auto pt-14 px-6 lg:px-16 sm:pt-16">
        <div className="flex flex-col md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
          <div className="flex-1 bg-white text-primary-foreground p-6 rounded-lg relative">
            <h2
              className={`${josefin.className} text-3xl sm:text-5xl font-bold mb-4 relative pb-8`}
            >
              History
              <div className="absolute w-20 h-1 bg-tkdblue top-[100%]"></div>
            </h2>
            <p className="font-medium leading-relaxed">
              Master Yong Jun Lee first opened his school in the Eagle Park
              Shopping Center on September 16, 1993. On February 1, 1994 he
              moved to the 7570 Starkey Road location, which he operated out of
              for almost 30 years. Master Lee then moved to 8771 Park Blvd.
              Seminole, FL 33777 - the shopping center we are in now. Master Lee
              did most of the teaching for several years until some of his
              students developed into higher belts and could assist him. This
              also helped the assistants progress to Black Belts since Master
              Lee believes that Black Belts must be able to teach and instruct.
              Master Lee is a 8th Dan Black Belt. This made him a Grandmaster, a
              great honor for him and his school.
            </p>
          </div>
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[30rem] md:h-auto">
            <Image
              src="/yongjunlee.jpg"
              alt="A portrait of Master Lee"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="container xl:w-[80%] mx-auto pt-14 px-6 lg:px-16 sm:pt-16">
        <motion.div
          variants={parent}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={viewRef}
        >
          <div className="flex flex-col-reverse md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[30rem] md:h-auto">
              <Image
                src="/involvement.jpg"
                alt="picture of students outside"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 bg-white text-primary-foreground p-6 rounded-lg relative">
              <h2
                className={`${josefin.className} text-3xl sm:text-5xl font-bold mb-4 relative pb-2`}
              >
                Involvement
              </h2>
              <p className="font-medium leading-relaxed">
                Master Lee has done many things to promote Tae Kwon Do and his
                school over the years. For seven years he hosted a large annual
                tournament in which several Tae Kwon Do schools in the area
                participated. He had almost 300 students participate for several
                of the years. Four times he has brought the Korean National
                Demonstration Team (called the &apos;Little Dragons&apos;) to
                Pinellas County. They demonstrated Korean martial arts, music
                and dance on TV around several schools in the area as well as at
                Champion Tae Kwon Do. They also demonstrated and assisted at
                several of our tournaments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="container xl:w-[80%] mx-auto pt-14 px-6 lg:px-16 sm:pt-16">
        <motion.div
          variants={parent}
          initial="hidden"
          animate={twoinView ? "visible" : "hidden"}
          ref={twoviewRef}
        >
          <div className="flex flex-col md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
            <div className="flex-1 bg-white text-primary-foreground p-6 rounded-lg relative">
              <h2
                className={`${josefin.className} text-3xl sm:text-5xl font-bold mb-4 relative pb-2`}
              >
                Demonstrations
              </h2>
              <p className="font-medium leading-relaxed">
                Master Lee does demonstrations every year at SPIFFs ( St.
                Petersburg International Folk Festival). Master Lee and his
                students have also performed for the Jack Harris Show, Pinellas
                County Asian Festival, the Bayfront Center, and the USF Asian
                Festival. He has sponsored classes at several local schools. He
                makes donations to the classes and has held demonstrations. The
                schools he has worked with include Starkey Elementary, Seminole
                Elementary, Northside Christian School, Bardmoor Elementary and
                Walshingham Elementary.
              </p>
            </div>
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[30rem] md:h-auto">
              <Image
                src="/spiffs.jpg"
                alt="taekwondo students holding up the american and korean flag"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="container xl:w-[80%] mx-auto pt-14 px-6 lg:px-16 sm:pt-16 pb-20">
        <motion.div
          variants={parent}
          initial="hidden"
          animate={threeinView ? "visible" : "hidden"}
          ref={threeviewRef}
        >
          <div className="flex flex-col-reverse md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg relative grow h-[30rem] md:h-auto">
              <Image
                src="/instructors.jpg"
                alt="Taekwondo instructors holding their rewards"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 bg-white text-primary-foreground p-6 rounded-lg relative">
              <h2
                className={`${josefin.className} text-3xl sm:text-5xl font-bold mb-4 relative pb-2`}
              >
                Leadership
              </h2>
              <p className="font-medium leading-relaxed">
                Master Lee has many good instructors and assistant instructors.
                Those with the blue uniforms are assistant instructors. A few of
                our students consistently volunteer to help other students
                improve and learn leadership techniques at our Saturday
                Instructor class. Derek and Matthew Gunther and Louis Wallen
                have achieved their 4th Dan black belts and are now Tae Kwon Do
                Masters. They are the first group of Masters Grandmaster Lee has
                developed. Master Lee is very grateful for all the parents and
                students who have made his school such a success over the last
                30 years.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

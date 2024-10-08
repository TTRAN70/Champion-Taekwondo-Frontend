"use client";

import { josefin, inter } from "@/app/fonts";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    pic: "/bicep.svg",
    title: "Healthier Life",
    subtitle:
      "Reduce the hospital visits, build strength, flexibility, and cardiovascular endurance like never before",
    alt: "bicep flex icon",
  },
  {
    pic: "/mental.svg",
    title: "Mental Health",
    subtitle:
      "Conquer everything, develop focus, discipline, and determination that bleeds into your life",
    alt: "bull in mind icon",
  },
  {
    pic: "/connection.svg",
    title: "Connections",
    subtitle:
      "Make new friends, join a supportive community of like-minded individuals, creating friendships and belonging",
    alt: "group of people",
  },
  {
    pic: "/selfdefense.svg",
    title: "Self-Defense",
    subtitle:
      "Feel confident, learn practical techniques to protect yourself and others so you feel safe no matter what",
    alt: "people fighting",
  },
];

const imageStyles = {
  padding: "10px",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

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
        delay: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12 } },
  };

  return (
    <>
      <motion.section
        variants={parent}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <div className="flex flex-col xl:flex-row items-center mt-20 xl:mt-32 justify-center xl:ml-12">
          <div className="flex flex-col gap-y-7 mb-20 xl:mb-0">
            <div
              className={`${josefin.className} text-center xl:text-left text-tkdblue text-lg font-semibold`}
            >
              LEARN FROM A GRANDMASTER
            </div>
            <div
              className={`${josefin.className} text-center xl:text-left text-black text-4xl sm:text-7xl font-bold self-center sm:self-auto`}
            >
              MIND, BODY, SPIRIT
            </div>
            <p
              className={`${josefin.className} text-[#000000]/80 text-center xl:text-left text-md sm:text-lg font-bold w-[90%] sm:w-[100%] self-center sm:self-auto`}
            >
              Taekwondo is more than just a martial art; it&apos;s a way of
              life. Here are some of the key benefits you&apos;ll experience:
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            ref={ref}
          >
            <div className="grid justify-center gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:ml-7">
              {skills.map((skill) => {
                return (
                  <motion.div key={skill.title} variants={item}>
                    <div
                      className="relative rounded-[40px] p-3 overflow-hidden bg-altgrey h-[20rem]"
                      key={skill.title}
                    >
                      <div className="flex flex-col p-5 gap-y-2">
                        <Image
                          src={skill.pic}
                          alt={skill.alt}
                          width={70}
                          height={70}
                          style={imageStyles}
                          sizes="10vw"
                        ></Image>
                        <div
                          className={`${inter.className} text-black text-2xl font-bold mt-2`}
                        >
                          {skill.title}
                        </div>
                        <p
                          className={`${inter.className} text-[#000000]/80 text-md font-medium`}
                        >
                          {skill.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.section>
      <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 justify-center items-center gap-x-12 md:gap-x-24 my-10 sm:mr-8">
        <div className="relative w-28 h-28">
          <Image
            src="/wtlogo.png"
            alt="World Taekwondo Logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="10vw"
          ></Image>
        </div>
        <div className="relative w-24 h-24">
          <Image
            src="/kukilogo.png"
            alt="Kukkiwon Logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="10vw"
          ></Image>
        </div>
        <div className="relative w-16 h-16">
          <Image
            src="/kukilogo2.png"
            alt="World Taekwondo Logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="10vw"
          ></Image>
        </div>
      </div>
    </>
  );
}

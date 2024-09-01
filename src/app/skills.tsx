"use client";

import { josefin, inter } from "@/app/fonts";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    pic: "/dumbell.png",
    title: "Healthy Life",
    subtitle:
      "Build strength, flexibility, and cardiovascular endurance through our high-energy workouts",
  },
  {
    pic: "/tenacity.png",
    title: "Cognitive Ability",
    subtitle:
      "Develop focus, discipline, and determination that extend beyond the training mat and into everyday life",
  },
  {
    pic: "/community.png",
    title: "Connections",
    subtitle:
      "Join a supportive community of like-minded individuals, creating friendships and belonging",
  },
  {
    pic: "/fight.png",
    title: "Self-Defense",
    subtitle:
      "Learn practical techniques to protect yourself and others so you can feel safe no matter where you are",
  },
];

const imageStyles = {
  borderRadius: "100%",
  padding: "10px",
  backgroundColor: "#4583E1",
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
      <motion.div
        variants={parent}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <div className="flex flex-col xl:flex-row items-center mt-20 xl:mt-32 justify-center xl:ml-12">
          <div className="flex flex-col sm:w-[27rem] gap-y-7 mb-20 xl:mb-0">
            <div
              className={`${josefin.className} text-center xl:text-left text-tkdblue text-lg font-semibold`}
            >
              LEARN FROM A GRANDMASTER
            </div>
            <div
              className={`${josefin.className} text-center xl:text-left text-black text-4xl sm:text-7xl font-bold self-center sm:self-auto`}
            >
              GAIN VALUABLE SKILLS
            </div>
            <p
              className={`${inter.className} text-[#7B7878] text-center xl:text-left text-md sm:text-lg font-medium w-[90%] sm:w-[100%] self-center sm:self-auto`}
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
            <div className="grid justify-center gap-4 sm:grid-cols-2 true:grid-cols-4 xl:ml-7">
              {skills.map((skill) => {
                return (
                  <motion.div key={skill.title} variants={item}>
                    <div
                      className="relative rounded-[40px] p-3 overflow-hidden border border-gray-300 hover:bg-altgrey hover:border-altgrey w-[20rem] h-[20rem]"
                      key={skill.title}
                    >
                      <div className="flex flex-col p-5 gap-y-2">
                        <Image
                          src={skill.pic}
                          alt="Dumbell icon"
                          width={70}
                          height={70}
                          style={imageStyles}
                        ></Image>
                        <div
                          className={`${josefin.className} text-2xl font-bold mt-2`}
                        >
                          {skill.title}
                        </div>
                        <p
                          className={`${inter} text-[#7B7878] text-md font-medium`}
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
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 justify-center items-center gap-x-12 md:gap-x-24 mt-28 mb-28 sm:mr-8">
        <Image
          src="/wtlogo.png"
          alt="World Taekwondo Logo"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/kukilogo.png"
          alt="World Taekwondo Logo"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/kukilogo2.png"
          alt="World Taekwondo Logo"
          width={60}
          height={60}
          className="xl:ml-6"
        ></Image>
      </div>
    </>
  );
}

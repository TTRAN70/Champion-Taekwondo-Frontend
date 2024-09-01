"use client";

import { josefin, inter } from "@/app/fonts";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const classes = [
  {
    pic: "/kidstkd.jpg",
    title: "KIDS",
    subtitle:
      "Fun and engaging classes specially crafted for our young martial artists.",
  },
  {
    pic: "/teentkd.jpg",
    title: "TEENS",
    subtitle:
      "Dynamic sessions designed to challenge and inspire teenagers, fostering discipline and confidence in a supportive environment.",
  },
  {
    pic: "/adult.jpg",
    title: "ADULTS",
    subtitle:
      "Tailored training that challenges and empowers adults of all abilities.",
  },
  {
    pic: "/afterschool.png",
    title: "AFTER SCHOOL",
    subtitle:
      "A safe and productive environment for kids to learn Taekwondo, complete their homework, and develop important life skills.",
  },
];

export default function Explore() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 30,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    defaultAnimation: {
      duration: 1000,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slideChanged(slider) {
          if (slider.track.details.rel >= 1) {
            setCurrentSlide(slider.track.details.rel + 1);
          } else if (slider.track.details.rel === 0) {
            setCurrentSlide(0);
          }
        },
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1000px)": {
        slideChanged(slider) {
          if (slider.track.details.rel === 1) {
            setCurrentSlide(slider.track.details.rel + 2);
          } else {
            setCurrentSlide(0);
          }
        },
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1600px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
    },
  });
  const viewRef = useRef(null);
  const inView = useInView(viewRef);
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
    <div className="h-[55rem] sm:h-[58rem] lg:h-[58rem] 2xl:h-[55rem] rounded-[3rem] px-10 xl:px-56 py-14 relative">
      <Image
        src="/tai4.jpg"
        objectFit={"cover"}
        fill
        alt="explorebg"
        style={{
          borderRadius: "50px",
        }}
      />
      <motion.div
        variants={parent}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={viewRef}
      >
        <div className="flex flex-col gap-y-3">
          <h3
            className={`${josefin.className} text-tkdblue text-sm sm:text-lg font-semibold z-40`}
          >
            EXPLORE OUR PROGRAMS
          </h3>
          <h2
            className={`${josefin.className} text-black text-2xl sm:text-5xl font-bold z-40`}
          >
            WHERE WE BEGIN
          </h2>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex items-center gap-x-3 mt-5 z-40">
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
        <div className="pt-12 py-5 keen-slider" ref={ref}>
          {classes.map((elem) => {
            return (
              <motion.div
                key={elem.title}
                whileTap={{}}
                whileHover={{ translateY: -10, transition: { duration: 0.3 } }}
                transition={{
                  duration: 0.3, // duration time when mouse leaves the element
                }}
              >
                <div className="keen-slider__slide h-[32rem] relative rounded-[2rem] group hover:cursor-pointer hover:shadow-lg">
                  <div className="flex flex-col h-full bg-white">
                    <h2
                      className={`${inter.className} transition-all ease-in-out duration-200 text-black group-hover:border-0 group-hover:bg-[#4790FF] group-hover:text-white text-xl font-bold mt-6 mx-6 py-1 px-3 rounded-full border-0 border-black w-max`}
                    >
                      {elem.title}
                    </h2>
                    <div className="h-1/3 w-5/6 relative mx-auto my-3">
                      <Image
                        src={elem.pic}
                        objectFit={"cover"}
                        fill
                        alt="Landing page image"
                        style={{
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <p
                      className={`${inter.className} transition-all ease-in-out duration-200 text-[#4E4E4E] text-md font-medium pt-2 px-6`}
                    >
                      {elem.subtitle}
                    </p>
                    <div
                      className={`${inter.className} font-semibold transition ease-in-out duration-200 group-hover:text-[#4790FF] text-black absolute rounded-tr-lg text-center bottom-0 p-5`}
                    >
                      <Link href="/test">
                        View
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 group-hover:bg-white bg-[#4790FF]"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled
    ? "fill-gray-300 transition duration-75 ease-in-out border-gray-300 cursor-not-allowed z-40"
    : "fill-gray-700 border-gray-700 hover:fill-tkdblue hover:border-tkdblue transition duration-75 ease-in-out z-40 cursor-pointer";
  return (
    <svg
      onClick={props.onClick}
      className={`z-40 w-10 h-10 p-2 border-[2px] rounded-full true:cursor-auto true:hidden ${
        props.left ? "left-20" : "left-auto right-20"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      )}
      {!props.left && (
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      )}
    </svg>
  );
}

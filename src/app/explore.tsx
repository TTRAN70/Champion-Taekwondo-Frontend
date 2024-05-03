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
    title: "Kids Taekwondo",
    subtitle:
      "Kids gain focus, confidence, and respect in a fun positive setting that encourages team work and personal growth.",
  },
  {
    pic: "/teentkd.jpg",
    title: "Teen Taekwondo",
    subtitle:
      "Dynamic sessions designed to challenge and inspire teenagers, fostering discipline and confidence in a supportive environment.",
  },
  {
    pic: "/adult.jpg",
    title: "Adult Taekwondo",
    subtitle:
      "Whether you’re starting a new martial art or looking to learn self-defense, you will get fit and relieve stress in an encouraging environment that gives you a full body workout.",
  },
  {
    pic: "/afterschool.png",
    title: "After School",
    subtitle:
      "A structured and enriching program offering Taekwondo training combined with academic support, providing a well-rounded after-school experience.",
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
    <div className="h-[55rem] sm:h-[58rem] lg:h-[58rem] 2xl:h-[55rem] rounded-[3rem] bg-gradient-to-b from-[#1B5EE2] to-[#003287] px-10 xl:px-56 py-14 relative">
      <motion.div
        variants={parent}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={viewRef}
      >
        <div className="flex flex-col gap-y-7 justify-center xl:justify-normal">
          <h3
            className={`${josefin.className} text-white text-sm sm:text-lg font-bold`}
          >
            EXPLORE OUR PROGRAMS
          </h3>
          <h2
            className={`${josefin.className} text-white text-2xl sm:text-6xl font-bold`}
          >
            Champion Taekwondo Classes
          </h2>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex items-center justify-end gap-x-3 mt-3">
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
        <div className="pt-12 keen-slider" ref={ref}>
          {classes.map((elem) => {
            return (
              <motion.div key={elem.title} whileTap={{ scale: 0.8 }}>
                <div className="keen-slider__slide h-[35rem] relative rounded-[1rem] group hover:cursor-pointer">
                  <Image
                    src={elem.pic}
                    fill
                    style={{
                      objectFit: "cover",
                      paddingBottom: "250px",
                    }}
                    alt="Landing page image"
                  />
                  <div className="flex flex-col absolute h-96 top-52 bg-white">
                    <h2
                      className={`${josefin.className} text-black text-xl 2xl:text-2xl font-bold pt-6 px-6`}
                    >
                      {elem.title}
                    </h2>
                    <p
                      className={`${inter.className} text-[#4E4E4E] text-md 2xl:text-lg font-medium pt-2 px-6`}
                    >
                      {elem.subtitle}
                    </p>
                    <div
                      className={`${inter.className} font-semibold text-white bg-[#3C84FF] absolute rounded-tr-lg text-center bottom-8 p-5 bg-[#3C84FF]`}
                    >
                      <Link href="/test">
                        See more
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
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
    ? "fill-[#C3C3C3] border-[#C3C3C3]"
    : "fill-white border-white";
  return (
    <svg
      onClick={props.onClick}
      className={`w-11 h-11 p-2 border-2 rounded-full cursor-pointer 2xl:cursor-auto 2xl:hidden ${
        props.left ? "left-20" : "left-auto right-20"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

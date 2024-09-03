"use client";

import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewSlide from "@/app/reviewslide";
import { review1, review2, review3 } from "@/app/lib/reviewdata";
import { josefin } from "./fonts";

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide != 2) {
        instanceRef.current?.moveToIdx(currentSlide + 1);
      } else {
        instanceRef.current?.moveToIdx(0);
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="relative pt-20 pb-10">
        <h2 className={`font-bold ${josefin.className} text-3xl ml-5`}>
          What our awesome students are saying
        </h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <ReviewSlide previews={review1} />
          </div>
          <div className="keen-slider__slide">
            <ReviewSlide previews={review2} />
          </div>
          <div className="keen-slider__slide">
            <ReviewSlide previews={review3} />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center py-4">
          {instanceRef.current.track.details.slides.map((slide) => {
            return (
              <button
                key={slide.abs}
                onClick={() => {
                  instanceRef.current?.moveToIdx(slide.abs);
                }}
                className={
                  "border-none focus:outline-none w-[5px] h-[5px] bg-[#c5c5c5] rounded-full mx-1 p-[0.3rem] cursor-pointer" +
                  (currentSlide === slide.abs ? " !bg-tkdblue" : "")
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

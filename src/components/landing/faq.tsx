"use client";

import { josefin } from "@/app/fonts";
import { faqsList } from "@/app/lib/faqdata";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Faq() {
  const faqRef = useRef(null);
  const viewRef = useInView(faqRef, { once: true });
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
    <section className="py-20 my-20 relative rounded-[3rem] bg-black relative">
      <Image
        src="/pledge.jpg"
        alt="students pledging"
        fill
        style={{ objectFit: "cover" }}
        className="brightness-[0.2] rounded-[3rem]"
        sizes="90vw"
        placeholder="blur"
        blurDataURL="/pledge.jpg"
      />
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row md:px-8">
        <div className="flex-1 z-40">
          <div className="max-w-lg">
            <h3 className={`${josefin.className} font-bold text-tkdblue`}>
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p
              className={`${josefin.className} mt-3 text-white text-3xl font-bold sm:text-4xl`}
            >
              Things you're probably wondering about
            </p>
          </div>
        </div>
        <div className="flex-1 md:mt-0 z-40">
          <motion.div
            variants={parent}
            initial="hidden"
            animate={viewRef ? "visible" : "hidden"}
            ref={faqRef}
          >
            <ul className="space-y-4 divide-y divide-white-700">
              {faqsList.map((item) => (
                <li className="py-5" key={item.q}>
                  <summary className="flex items-center justify-between font-semibold text-white">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-gray-300 leading-relaxed">{item.a}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-14 mt-10 relative rounded-[3rem]">
      <Image
        src="/rt5.jpg"
        fill
        objectFit={"cover"}
        alt="Blue background with pattern"
        style={{
          borderRadius: "50px",
          zIndex: 0,
        }}
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
              Questions? We have them answered
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
            <ul className="space-y-4 divide-y divide-gray-700">
              {faqsList.map((item, idx) => (
                <li className="py-5" key={idx}>
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

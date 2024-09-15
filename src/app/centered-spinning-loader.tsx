"use client";

import { motion } from "framer-motion";

export default function CenteredSpinningLoader({
  size = 60,
  color = "currentColor",
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex items-center justify-center" role="status">
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          aria-hidden="true"
        >
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0.2 }}
            animate={{ pathLength: 0.8 }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

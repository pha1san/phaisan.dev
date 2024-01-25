"use client";
import { m } from "framer-motion";

const ResumeButton = () => {
  return (
    <a href="/resume.pdf" target="_blank">
      <m.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="h-8 rounded-lg bg-blue-300/40 px-5 text-lg font-semibold text-blue-primary"
      >
        Resume
      </m.button>
    </a>
  );
};

export default ResumeButton;

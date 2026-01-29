import React, { useMemo } from "react";
import Particle from "./../Components/Particle";
import { motion } from "framer-motion";

const Home = () => {
  const rules = useMemo(
    () => [
      "Web Devoloper",
      "MERN Devoloper",
      "Software Engineer",
      "Software Developer",
    ],
    [],
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeOut = setTimeout(
      () => {
        if (!deleting && subIndex < rules[index].length)
          setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === rules[index].length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % rules.length);
        }
      },
      deleting ? 40 : 60,
    );

    return () => clearTimeout(timeOut);
  }, [subIndex, index, deleting, rules]);
  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <Particle></Particle>
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 
        w-[70vw] sm:w-[z-50vw] md:w-[40vw]
        h-[70vw] sm:h-[z-50vw] md:h-[40vw]
        max-w-125 max-h-125
        rounded-full
        bg-linear-to-r from-[#302b63] to-[#1cd8d2]
        opacity-30 md:opacity-20 sm:opacity-10\
        blur-[100px] sm:blur-[130px] md:blur-[150px] 
        animate-pulse"
        ></div>
        <div
          className="absolute bottom-0 right-0 
        w-[60vw] sm:w-[z-50vw] md:w-[40vw]
        h-[60vw] sm:h-[z-50vw] md:h-[40vw]
        max-w-125 max-h-125
        rounded-full
        bg-linear-to-r from-[#302b63] to-[#1cd8d2]
        opacity-30 md:opacity-20 sm:opacity-10\
        blur-[100px] sm:blur-[130px] md:blur-[150px] 
        animate-pulse delay-500"
        ></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            <motion.div
              className="mb-3 sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{rules[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

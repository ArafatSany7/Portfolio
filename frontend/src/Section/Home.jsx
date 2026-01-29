import React, { useMemo } from "react";
import Particle from "./../Components/Particle";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const social = [
  {
    Icon: FaXTwitter,
    label: "X",
    href: "https://twitter.com/yourprofile",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/yourprofile",
  },
  {
    Icon: FaLinkedin,
    label: "Linked",
    href: "https://linkedin.com/yourprofile",
  },
];

const glow = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

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
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#3e2b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm
              <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:whitespace-nowrap">
                Sany
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Pursuing Software Engineering at Daffodil International University
              | Aspiring Full-stack Engineer Focused on crafting
              high-performance, interactive web experiences.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#project"
                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:text-black hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-3 rounded-full font-medium text-lg text-black bg-gray-200 shadow-lg hover:bg-gray-500 hover:scale-105 hover:text-white transition-all duration-300"
              >
                My Resume
              </a>
            </motion.div>
            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {social.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glow}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

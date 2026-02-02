import { motion } from "framer-motion";
import p from "../assets/IMG_1585 (2).jpeg";
const About = () => {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[220px] h-[220px] opacity-20 blur-[120px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-20 blur-[120px]",
  ];

  const stat = [
    { label: "Experience", value: "1+ years" },
    { label: "Speciality", value: "Full-Stack" },
    { label: "Focus", value: "Modern-AI" },
  ];
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#202b63] via-[#00bf85] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2] to-[#302b63]/20 border border-[#1cd8d2]\25 hover:scale-105 transition-all duration-300">
            <img src={p} alt="profile" className="absolute inset-0 " />
          </motion.div>
          <div className="flex flex-1 flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] to-[#98dedc]">
              Arafat Sany
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl ">
              Pursuing Software Engineering at Daffodil International University
              | Aspiring Full-stack Engineer Focused on crafting
              high-performance, interactive web experiences. Currently mastering
              React, TypeScript, and Framer Motion.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stat.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:scale-105 duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-lg font-semibold text-white">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#project"
                className="inline flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 hover:scale-105 transition-all duration-300"
              >
                View Project
              </a>
              <a
                href="#contact"
                download
                className="inline flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I am a Software Engineering student at{" "}
            <span className="font-bold text-green-50">
              Daffodil International University{" "}
            </span>
            with a strong focus on modern, interactive web development.
            Specializing in the MERN stack, I am passionate about building
            functional and user-centric digital solutions. My academic journey
            is complemented by practical experience in creating diverse web
            platforms, including a blood donation coordination site and dynamic
            pages for the restaurant industry. I am driven by a desire to solve
            real-world problems through clean code and innovative design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

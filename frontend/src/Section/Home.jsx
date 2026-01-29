import React from "react";
import Particle from "./../Components/Particle";

const Home = () => {
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
        max-w-[500px] max-h-[500px]
        rounded-full
        bg-gradient-to-r from-[#302b63] to-[#1cd8d2]
        opacity-30 md:opacity-20 sm:opacity-10\
        blur-[100px] sm:blur-[130px] md:blur-[150px] 
        animate-pulse"
        ></div>
        <div
          className="absolute -bottom-32 -right-40 
        w-[60vw] sm:w-[z-50vw] md:w-[40vw]
        h-[60vw] sm:h-[z-50vw] md:h-[40vw]
        max-w-[500px] max-h-[500px]
        rounded-full
        bg-gradient-to-r from-[#302b63] to-[#1cd8d2]
        opacity-30 md:opacity-20 sm:opacity-10\
        blur-[100px] sm:blur-[130px] md:blur-[150px] 
        animate-pulse"
        ></div>
      </div>
    </section>
  );
};

export default Home;

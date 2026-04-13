import { useEffect, useMemo, useRef, useState } from "react";
import img1 from "../assets/img1.png";
import photo1 from "../assets/photo1.png";
import img2 from "../assets/img2.png";
import photo2 from "../assets/photo2.png";
import { useMotionValueEvent, useScroll } from "framer-motion";

const useIsMobileHook = (query = "(max-width : 630px)") => {
  const [isMobile, setMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches,
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setMobile(e.matches);

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return isMobile;
};

export default function Project() {
  const isMobile = useIsMobileHook();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        tittle: "Project 1",
        link: "https://www.example.com/",
        bgColor: "#0d4d3d",
        image: isMobile ? img1 : photo1,
      },
      {
        tittle: "Project 2",
        link: "https://www.example2.com/",
        bgColor: "#0d4d3d",
        image: isMobile ? img2 : photo2,
      },
    ],
    [isMobile],
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start ", "end end"],
  });
  const threshold = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = threshold.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? threshold.length - 1 : idx);
  });
  const activeProject = projects[activeIndex];

  return (
    <section
      ref={sceneRef}
      id="project"
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          <h2 className={`text-3xl font-semibold z-10 text-center ${isMobile?"mt-4":"mt-8"}`}>My Work</h2>
          <div className={`relative w-full flex flex-1 items-center justify-center ${isMobile ? "-mt-4" : ""}`}>
            {projects.map((Project,idx)=>(
              <div key={Project.tittle}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-10"}`}
              style={{width:"85%",maxWidth:"1200px"}}>
                {activeIndex === idx && (
                  <h3
                    className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white sm:absolute sm:-top-20 sm:left-[36%] lg:left-[-5%] sm:mb-0 italic font-semibold ${
                      isMobile ? "-mt-24" : ""
                    }`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {Project.tittle}
                  </h3>
                )}

                <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                  isMobile ? "mb-6 rounded-lg" : "mb-12 sm:mb-10 rounded-xl"
                }
                h-[62vh] sm:h-[60vh]`}

                style={{
                  zIndex:10,
                  transition: "box-shadow 250ms ease"

                }}>
                  <img src={Project.image} alt={Project.tittle}
                  className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl "
                  style={{position:"relative",
                    zIndex:10,
                    filter:"drop-shadow(0 14px 40px rgba(0,0,0,0.65))",
                    transition: "filter 200ms ease"
                  }} 
                  loading="lazy"/>
                </div>

              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

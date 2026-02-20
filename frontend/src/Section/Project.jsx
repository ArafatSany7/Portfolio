import React, { useEffect, useMemo, useRef, useState } from "react";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { useMotionValueEvent, useScroll } from "framer-motion";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const nql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    nql.addEventListener("change", handler);
    setIsMobile(nql.matches);
    return () => nql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

const Project = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const project = useMemo(
    () => [
      {
        tittle: "Drop",
        link: "https://www.drop.com",
        bgcolor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },
      {
        tittle: "Mesa Elegante",
        link: "https://www.MesaElegante.com",
        bgcolor: "#0d4d3d",
        image: isMobile ? photo2 : img2,
      },
    ],
    [isMobile],
  );

  const { scrollYProgress } = useScroll({
    terget: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = project.map((_, i) => (i + 1) / project.length);

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = project[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
    ></section>
  );
};

export default Project;

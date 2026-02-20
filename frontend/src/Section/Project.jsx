import React, { useEffect, useMemo, useRef, useState } from "react";

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

  const project = useMemo(() => [
    {
      tittle: "Drop",
      link: "https://www.drop.com",
      bgcolor: "#0d4d3d",
      image: isMobile ? photo1 : img1,
    },
  ]);
  <section id="projects" className="relative text-white"></section>;
};

export default Project;

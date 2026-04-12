import { useEffect, useMemo, useRef, useState } from "react";
import img1 from "../assets/img1.png";
import photo1 from "../assets/photo1.png";
import img1 from "../assets/img2.png";
import photo1 from "../assets/photo2.png";


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
  const screnRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        tittle: "Project 1",
        link: "https://www.example.com/",
        bgColor: "#0d4d3d",
        image: isMobile ?img1  : photo1,
      },
      {
        tittle: "Project 2",
        link: "https://www.example2.com/",
        bgColor: "#0d4d3d",
        image: isMobile ? img2 : photo2,
      }
    ],
    [isMobile],
  );
  return <Section id="projects" className="relative text-white"></Section>;
}

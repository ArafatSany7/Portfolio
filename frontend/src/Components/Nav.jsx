import React, { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  // const [forceVisible, setForceVisible] = useState(false);

  // const isScroll = useRef(0);
  // const timerId = useRef(null);

  // useEffect(() => {
  //   const homeSection = document.querySelector("#home");
  //   const observer = new IntersectionObserver();
  //   ([entry]) => {
  //     if (entry.isIntersecting) {
  //       setForceVisible(true);
  //       setVisible(true);
  //     }else{
  //       setForceVisible(false);
  //     },{threshold 0.1}
  //   };
  //   if(homeSection) observer.observe(homeSection);
  //   return (()=>{
  //     if(homeSection) observer.unobserve(homeSection)
  //   },[])
  // });
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
          >
            <HiMenu />
          </button>
        </div>
        <div>
          <h1 className="text-center">Sany</h1>
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-linear-to-r from-pink-600 to-blue-600 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reachout
          </a>
        </div>
      </nav>
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      ></OverlayMenu>
    </>
  );
};

export default Nav;

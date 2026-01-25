import React, { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-center px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="block lg:absolute lg:left-0 lg:transform"></div>
        <div>
          <h1 className="text-center">Sany</h1>
        </div>
      </nav>
      <OverlayMenu></OverlayMenu>
    </>
  );
};

export default Nav;

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineTouchApp } from "react-icons/md";
import "../../src/nav.css";
import { useState } from "react";
function Nav() {
  const [activeNav, setActive] = useState("#");
  window.onload = function() {
    setInterval(() => {
      document.title = "Portfolio-Resume";
    }, 2000);
    setInterval(() => {
      document.title = "Noman's Resume Portfolio";
    }, 1500);
  };

  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setActive("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <BiBook />
      </a>
      {/* <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActive("#services")}
      >
        <RiServiceLine />
      </a> */}
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActive("#portfolio")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
      <a
        href="#testimonial"
        className={activeNav === "#testimonial" ? "active" : ""}
        onClick={() => setActive("#testimonial")}
      >
        <MdOutlineTouchApp />
      </a>
    </nav>
  );
}

export default Nav;

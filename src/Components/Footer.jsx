import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import "../../src/footer.css";
function Footer() {
  return (
    <section id="footer">
      <footer>
        <a href="" className="footer_logo">
          Mian Noman
        </a>
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter />
          </a>
          <a href="https://www.instagram.com/miannomi333/">
            <FiInstagram />
          </a>
        </div>
        <div className="footer_copyright">
          <small>&copy; CoderMian. All rights reserved.</small>
        </div>
      </footer>
    </section>
  );
}

export default Footer;

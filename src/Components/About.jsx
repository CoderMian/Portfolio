import React from "react";
import ME from "../../src/assets/me_about.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "../../src/about.css";

function About() {
  return (
    <section id="about">
      <h5>To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Months Working</small>
            </article>
            <article className="about_card">
              <FiUser className="about_icon" />
              <h5>FYP</h5>
              <small>A+ Grade</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            I’m always energetic and eager to learn new skills Flexible in my
            working hours, being able to work evenings and weekends. Committed
            to learning and self-development so that I can consistently achieve
            better results. Even though I take my work seriously, I do have a
            good sense of humor.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

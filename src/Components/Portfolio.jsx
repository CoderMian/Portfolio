import React from "react";
import IMG1 from "../../src/assets/portfolio1.jpg";
import IMG2 from "../../src/assets/portfolio2.jpg";
import IMG3 from "../../src/assets/portfolio3.jpg";
import IMG4 from "../../src/assets/portfolio4.jpg";
import "../../src/portfolo.css";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Quiz App Swift & Swift Api Get Method",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Quiz App Swift & Swift Api Get Method",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Quiz App Swift & Swift Api Get Method",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Quiz App Swift & Swift Api Get Method",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

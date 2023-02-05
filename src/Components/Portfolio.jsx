import React from "react";
import IMG1 from "../../src/assets/portfolio1.png";
import IMG2 from "../../src/assets/portfolio2.png";
import IMG3 from "../../src/assets/portfolio3.png";
import IMG4 from "../../src/assets/portfolio4.png";
import IMG5 from "../../src/assets/portfolio5.png";
import IMG6 from "../../src/assets/portfolio6.png";
import "../../src/portfolo.css";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Quiz App Swift & Swift Api Get Method",
    github: "https://github.com/CoderMian/QuizzApp",
    demo: "https://github.com/CoderMian/QuizzApp",
  },
  {
    id: 2,
    image: IMG2,
    title: "Movie Clone & Redux Imdb-Api Get Method",
    github: "https://github.com/CoderMian/MovieAppClone",
    demo: "https://reduxmovieclone.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo List & Redux Todo List With Local Storage",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "TextUtils App React & React Text-Counter | Word Counter",
    github: "https://github.com/CoderMian/TextUtils",
    demo: "https://codermian.github.io/TextUtils/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Wheather App React & React OpenWheather Api Get Method",
    github: "https://github.com/CoderMian/WheatherApp",
    demo: "https://openweathers.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "ShoppingCart  Redux & React FakeStore Api Get Method",
    github: "https://github.com/CoderMian/Redux-Shopping-Cart",
    demo: "https://shoppingclone.netlify.app/",
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

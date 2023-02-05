import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "../../src/experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_front_end">
          <h3>Web Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-align">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-align">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-align">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bootstrap 5</h4>
                <small className="text-align">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>React Redux</h4>
                <small className="text-align">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Api Integration</h4>
                <small className="text-align">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>My Sql</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Jquerry</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of Front End  */}
        <div className="experience_back_end">
          <h3>Mobile Application Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Swift</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Swift UI</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Xml</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Java</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Mvvm Model</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Mvc Model</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Api Integration</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

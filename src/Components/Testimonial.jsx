import React from "react";
import ToolsAndTech from "../../src/assets/ToolsAndTech.jpg";
import Solution from "../../src/assets/Solution.jpg";
import ProbStat from "../../src/assets/ProbStat.jpg";
import Descrip from "../../src/assets/Descrip.jpg";
import "../../src/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
const data = [
  {
    avatar: Descrip,
    name: "Description",
    review:
      "Sketch to real is an Android, IOs, and Web Application that can generate accurate human facial visualization by using an input sketch of a face. Sketch to real would be based on Generative Adversarial Network simply known as GANs. It would generate a very accurate visualization of human faces that are sketched in an inaccurate or rough form...",
  },
  {
    avatar: ProbStat,
    name: "Problem Statement",
    review:
      "Every year thousands of crime investigations fail due to misleading culprit sketches. In most cases, victims forget the appearance and facial details of the culprit very quickly. This makes the criminal identification process difficult and long. To accurately make the sketches by hand is headache and time taken task.Our app purpose to resolve this problem...",
  },
  {
    avatar: Solution,
    name: "Solution",
    review:
      "Sketch To Real would generate very accurate criminal pictures by using the sketch for accurate visualization.Therefore, we want to provide a platform, which will provide all this functionality in platforms like android, iOS, and Web. It would save valuable time in criminal investigation and help in the accurate identification of criminals to the investigation agencies...",
  },
  {
    avatar: ToolsAndTech,
    name: "Tools And Technologies",
    review:
      "Python, Flutter, Dart, Deep learning, Image processing, Tensor Flow, Keras, Numpy, MatPlot, Vs Code, Jupyter Notebook, PyCharm, Figma, Firebase.",
  },
];
function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Final Year Project</h5>
      <h2>Sketch To Real</h2>
      <Swiper
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;

import React from "react";
import AVTR1 from "../../src/assets/avatar1.jpg";
import AVTR2 from "../../src/assets/avatar2.jpg";
import AVTR3 from "../../src/assets/avatar3.jpg";
import AVTR4 from "../../src/assets/avatar4.jpg";
import "../../src/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus cum nulla consequatur!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Male",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus cum nulla consequatur!",
  },
  {
    avatar: AVTR3,
    name: "Kwano Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus cum nulla consequatur!",
  },
  {
    avatar: AVTR4,
    name: "Alxender",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus cum nulla consequatur!",
  },
];
function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
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

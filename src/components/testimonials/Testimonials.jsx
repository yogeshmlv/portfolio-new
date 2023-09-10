import React from 'react';
import shapeTwo from '../../assets/shape-2.png';
import ShapeOne from "../../assets/shape-1.png";
import { testimonials } from '../../Data';

import testimonialsIcon from '../../assets/testimonials-icon.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonial">
    <h2 className="section__title text-cs">Testimonials</h2>
    <p className="section__subtitle">
        My <span>Customers Say</span>
    </p>

    <Swiper
     spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      540: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }}
    modules={[Pagination]}className="testimonials__container container mySwiper">
        {testimonials.map(({img, name,author, description}, index) => {
            return(
                <SwiperSlide className="testimonials__item card card-one"
                 key={index}
                 >
                  <div className="testimonials__header">
                    <div className="testimonials__icon">
                        <img src={testimonialsIcon} alt="" />
                    </div>

                    <img src={img} alt="" className="testimonials__img" />
                  </div>
                  <p className="testimonials__description">{description}</p>

                  <h3 className="testimonials__name">{name}</h3>
                  <p className="testimonials__author">{author}</p>

                  <img src={shapeTwo} alt="" className="shape c__shape" />
                </SwiperSlide>
            )
        })}
    </Swiper>

    <div className="section__deco deco__right">
                <img src={ShapeOne} alt="" className='shape'/>
            </div>

            <div className="section__bg-wrapper">
             <span className="bg__title">Reviews</span>
            </div>
</section>
  )
}

export default Testimonials
import React from 'react'
import './jobs.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* When I have more work experience, fill this section */
const Jobs = () => {
  return (
    <section id='jobs'>
      <h5>Work Experience</h5>
      <h2>Jobs I Have Done</h2>

      <Swiper className="container jobs__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="job">
          <div className="job__img">
            <img src="" alt="" />
          </div>
          <h5 className='job__name'>Playland's Castaway Cove</h5>
          <small className='job__description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sequi numquam vero veniam ut dolores eos consequatur qui nesciunt. Labore facilis voluptate expedita? Voluptatum aliquid magni ex labore explicabo? Quos.
          </small>
        </SwiperSlide>

        <SwiperSlide className="job">
          <div className="job__image">
            <img src="" alt="" />
          </div>
          <h5 className='job__name'>First Internship</h5>
          <small className='job__description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sequi numquam vero veniam ut dolores eos consequatur qui nesciunt. Labore facilis voluptate expedita? Voluptatum aliquid magni ex labore explicabo? Quos.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Jobs
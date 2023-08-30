import React from 'react'
import './jobs.css'
import castawayIMG from '../../assets/castaway_cove_logo.png'
import internshipIMG from '../../assets/internship_logo.png'

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
            <img src={castawayIMG} alt="castawayIMG" />
          </div>
          <h5 className='job__name'>Playland's Castaway Cove</h5>
          <small className='job__description'>
            My experience in this fast-paced, safety-critical role refined my problem-solving skills and proactive mindset, 
            now applied to debugging and security in software. I gained strong communication abilities, fostering effective 
            teamwork across diverse functions. These skills, coupled with technical proficiency, enable me to engineer efficient, 
            user-focused solutions.
          </small>
        </SwiperSlide>

        <SwiperSlide className="job">
          <div className="job__img">
            <img src={internshipIMG} alt="internshipIMG" />
          </div>
          <h5 className='job__name'>First Internship</h5>
          <small className='job__description'>
          While I haven't embarked on a formal internship journey yet, 
          my enthusiasm for diving into the real-world applications of 
          my skills knows no bounds. I'm eagerly anticipating the 
          opportunity to kickstart my professional growth through immersive 
          experiences, where I can channel my passion for learning into 
          tangible contributions. My drive to embrace challenges and 
          continuously evolve drives me to eagerly seek out internships as 
          a pathway to enriching my understanding and making a meaningful 
          impact in the field of computer science. 
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Jobs
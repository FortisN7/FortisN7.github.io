import React from 'react'
import './about.css'
import ME from '../../assets/me-gaming.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>GPA</h5>
              <small>3.92/4.00</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>7+ Years Learning</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Created Numerous</small>
            </article>
          </div>
          <p>
          I'm a junior computer science student at the New Jersey Institute of 
          Technology and Albert Dorman Honors College. I am very interested in 
          working for your company! A little about me, I have extensive 
          programming knowledge in Python, Java, Javascript, and C++, and I have created 
          many projects that can be seen below. I participate in a bunch of 
          extracurricular activities at NJIT like volleyball club, bowling team, 
          and esports club, to create a place where others want to be. These 
          experiences would make me a great candidate for you because I think I 
          embody what a company looks for when hiring a software engineering intern.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
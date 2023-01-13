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
              <small>3.955/4.000</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Years Learning</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>I have created numerous projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a optio numquam minima voluptates quisquam, aut assumenda eum, sit laboriosam commodi tempora provident sunt nisi? Quae assumenda quasi dolorum tempore.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About